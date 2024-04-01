document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvpForm');
    if (form) { // Check if the form exists
        form.addEventListener('submit', (event) => {
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const response = form.elements['response'].value;
        const guest = form.elements['guests'].value;

        // if (!name.trim()) {
        //     alert('Please enter your name');
        //     console.log("name: ", name)
        //     return;
        // }
        // if (!email.trim()) {
        //     alert('Please enter your email');
        //     console.log("email: ", email)
        //     return;
        // }
        // if (!isValidEmail(email)) {
        //     alert('Please enter a valid email');
        //     console.log("email: ", email)
        //     return;
        // }
        // if (!response) {
        //     alert('Please select a response');
        //     console.log("response: ", response)
        //     return;
        // }
        // if (response === 'accept' && guest < 1) {
        //     alert('Please enter a valid number of guests');
        //     console.log("guests: ", guest)
        //     return;
        // }
        
        console.log("name: ", name)
        console.log("email: ", email)
        console.log("response: ", response)
        console.log("guests: ", guest)
        fetch('/submit-rsvp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, response, guests }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the response from Flask
            alert('Thank you for your RSVP!');
            // Redirect or handle the UI update here
            window.location.href = '/thank-you-page'; // Adjust the URL as needed
        })
        .catch(error => console.error('Error:', error));
    });
    }

//     function isValidEmail(email) {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }
// });
