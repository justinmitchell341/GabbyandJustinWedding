document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvpForm');
    console.log("got event listener")
    form.addEventListener('submit', (event) => {
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const response = form.elements['response'].value;
        const guest = form.elements['guests'].value;

        if (!name.trim()) {
            alert('Please enter your name');
            console.log("name: ", name)
            return;
        }
        if (!email.trim()) {
            alert('Please enter your email');
            console.log("email: ", email)
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email');
            console.log("email: ", email)
            return;
        }
        if (!response) {
            alert('Please select a response');
            console.log("response: ", response)
            return;
        }
        if (response === 'accept' && guest < 1) {
            alert('Please enter a valid number of guests');
            console.log("guests: ", guest)
            return;
        }
        
        console.log("name: ", name)
        console.log("email: ", email)
        console.log("response: ", response)
        console.log("guests: ", guest)
        

        // If all validations pass, you can submit the form programmatically
        form.submit();
        // After form.submit()
// Display a success message
        alert('Thank you for your RSVP!');

// Redirect the user to another page
        window.location.href = './RSVPform.astro';
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
