// Logic to simulate password reset
        document.getElementById('forgot-form').onsubmit = (e) => {
            e.preventDefault();
            const contact = document.getElementById('forgot-contact').value;
            const btn = document.getElementById('forgot-btn');
            const successEl = document.getElementById('forgot-success');
            const errorEl = document.getElementById('forgot-error');

            btn.classList.add('is-loading');
            successEl.classList.add('hidden');
            errorEl.classList.add('hidden');

            // Simulate API call delay
            setTimeout(() => {
                btn.classList.remove('is-loading');
                if (contact.includes('@') || contact.length > 5) {
                    successEl.textContent = `Success! A reset link has been sent to ${contact}. Please check your inbox.`;
                    successEl.classList.remove('hidden');
                    document.getElementById('forgot-form').reset();
                } else {
                    errorEl.textContent = "Please enter a valid email or phone number.";
                    errorEl.classList.remove('hidden');
                }
            }, 1000);
        };

        lucide.createIcons();