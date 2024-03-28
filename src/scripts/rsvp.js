document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvpForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const response = form.elements['response'].value;
        const guest = form.elements['guests'].value;

        if (!name.trim()) {
            alert('Please enter your name');
            return;
        }
        if (!email.trim()) {
            alert('Please enter your email');
            return;
        }
        if (!isValidEmail(email)) {
            alert('Please enter a valid email');
            return;
        }
        if (!response) {
            alert('Please select a response');
            return;
        }
        if (response === 'accept' && guest < 1) {
            alert('Please enter a valid number of guests');
            return;
        }
        

        // If all validations pass, you can submit the form programmatically
        form.submit();
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
