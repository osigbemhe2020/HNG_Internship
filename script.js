        const nameInput = document.getElementById('fname');
        const emailInput = document.getElementById('e-mail');
        const subjectInput = document.getElementById('subject');   
        const messageInput = document.getElementById('message');
        const resultDiv = document.getElementById('result');

        window.onload = () => {
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';
        };

        const isValidEmail = () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(emailInput.value);
        };

        document.querySelector('form').addEventListener('submit', function(event) {
            event.preventDefault();
            resultDiv.classList.add('result');
            resultDiv.innerHTML = '';

            if (!isValidEmail()) {
                resultDiv.innerHTML += '<p data-testid="test-contact-error-email" style="color:red;">Please enter a valid email address.</p>';
                return;
            }
            if (nameInput.value.trim() === '') {
                resultDiv.innerHTML += '<p data-testid="test-contact-error-fname" style="color:red;">All fields are required.</p>';
                return;
            }
            if (subjectInput.value.trim() === '') {
                resultDiv.innerHTML += '<p data-testid="test-contact-error-subject" style="color:red;">All fields are required.</p>';
                return;
            }
            if (messageInput.value.trim().length < 10) {
                resultDiv.innerHTML += '<p data-testid="test-contact-error-message" style="color:red;">Message must be at least 10 characters long.</p>';
                return;
            }

            resultDiv.innerHTML = '<p data-testid="test-contact-success" style="color:green;">Your message has been sent successfully!</p>';
            nameInput.value = '';
            emailInput.value = '';
            subjectInput.value = '';
            messageInput.value = '';

            setTimeout(() => {
            resultDiv.innerHTML = '';
            resultDiv.classList.remove('result');
        }, 5000);
        });

        
                
