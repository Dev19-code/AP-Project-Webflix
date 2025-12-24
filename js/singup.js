/**
 * Script: Sign Up Logic
 * Description: Handles new user registration.
 * It creates a user in Firebase Auth and saves additional profile information to Firestore.
 */
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { setupPasswordToggle } from "./utils.js";
import { auth, db } from "./firestore.js";

        // Initialize toggles
        setupPasswordToggle('signup-password-toggle', 'signup-password');
        setupPasswordToggle('signup-confirm-password-toggle', 'signup-confirm-password');

        /**
         * Handle account creation form submission.
         */
        document.getElementById('signup-form').onsubmit = async (e) => {
            e.preventDefault();
            const btn = document.getElementById('signup-btn');
            const errorEl = document.getElementById('signup-error');

            const username = document.getElementById('signup-username').value;
            const contact = document.getElementById('signup-contact').value;
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('signup-confirm-password').value;

            // Clear previous errors
            errorEl.classList.add('hidden');

            // Password Match Validation
            if (password !== confirmPassword) {
                errorEl.textContent = "Error: Passwords do not match.";
                errorEl.classList.remove('hidden');
                return;
            }

            btn.classList.add('is-loading');

            try {
                // Sign in the user
                const userCredential = await createUserWithEmailAndPassword(auth, contact, password);
                const uid = userCredential.user.uid;

                // Save their profile
                await setDoc(doc(db, 'artifacts', 'users', uid, 'profile'), {
                    username,
                    contact,
                    createdAt: new Date().toISOString()
                });

                // Cache username for instant display
                localStorage.setItem('webflix_username', username);

                // Redirect to the main app page
                window.location.href = 'homePage.html';

            } catch (err) {
                errorEl.textContent = "Error: " + err.message;
                errorEl.classList.remove('hidden');
            } finally {
                btn.classList.remove('is-loading');
            }
        };

        lucide.createIcons();