/**
 * Script: Login Logic
 * Description: Handles the user login process using Firebase Auth.
 * It validates credentials, manages the UI loading state, and redirects to the homepage upon success.
 */
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { setupPasswordToggle, validateEmail, validatePassword } from "./utils.js";
import { auth, db } from "./firestore.js";

        // DOM Elements
        const authContainer = document.getElementById('auth-container');
        const authForm = document.getElementById('auth-form');
        const authSubmitBtn = document.getElementById('auth-submit-btn');
        const authError = document.getElementById('auth-error');
        const authMessage = document.getElementById('auth-message');

        // State
        let isLoggingIn = false;

        // Initialize password toggle
        setupPasswordToggle('password-visiblity-toggle', 'auth-password');

        /**
         * Handle login form submission.
         */
        authForm.onsubmit = async (e) => {
            e.preventDefault();
            authError.classList.add('hidden');
            authMessage.classList.add('hidden');

            const contact = document.getElementById('auth-contact').value;
            const password = document.getElementById('auth-password').value;

            if (!validateEmail(contact)) {
                authError.textContent = "Please enter a valid email address.";
                authError.classList.remove('hidden');
                return;
            }

            if (!validatePassword(password)) {
                authError.textContent = "Password must be at least 8 characters long and contain both letters and numbers.";
                authError.classList.remove('hidden');
                return;
            }

            authSubmitBtn.classList.add('is-loading');
            isLoggingIn = true;

            try {
                const userCredential = await signInWithEmailAndPassword(auth, contact, password);
                const uid = userCredential.user.uid;

                const snap = await getDoc(doc(db, 'artifacts', 'users', uid, 'profile'));
                if (!snap.exists()) {
                    console.warn("User profile missing in Firestore");
                } else {
                    localStorage.setItem('webflix_username', snap.data().username);
                }
                // Manual redirect after cache is set
                window.location.href = 'homePage.html';
            } catch (err) {
                isLoggingIn = false;
                authError.textContent = err.message;
                authError.classList.remove('hidden');
            } finally {
                authSubmitBtn.classList.remove('is-loading');
            }
        };

        /**
         * Listen for auth state changes to redirect logged-in users.
         */
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Redirect to homepage only if not currently processing a login
                if (!isLoggingIn) {
                    window.location.href = 'homePage.html';
                }
            } else {
                authContainer.style.display = 'flex';
            }
        });

        lucide.createIcons();