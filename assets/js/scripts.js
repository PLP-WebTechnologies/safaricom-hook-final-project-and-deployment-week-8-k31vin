document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            let isValid = true;
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Please enter a valid email address';
                isValid = false;
            } else {
                document.getElementById('email-error').textContent = '';
            }
            
            // Name validation
            if (name.trim() === '') {
                document.getElementById('name-error').textContent = 'Name is required';
                isValid = false;
            } else {
                document.getElementById('name-error').textContent = '';
            }
            
            // If valid, show success message
            if (isValid) {
                const formResult = document.getElementById('form-result');
                formResult.textContent = 'Form submitted successfully!';
                formResult.className = 'success-message';
                contactForm.reset();
            }
        });
    }
});