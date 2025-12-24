/**
 * Script: Reset Password Logic
 * Description: Manages the password reset functionality.
 * It sends a password reset email via Firebase Auth based on the user's input.
 */
import { sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { auth } from "./firestore.js";
import { validateEmail } from "./utils.js";

/**
 * Handle password reset form submission.
 */
document.getElementById('forgot-form').onsubmit = async (e) => {
    e.preventDefault();
    const contact = document.getElementById('forgot-contact').value.trim();
    const btn = document.getElementById('forgot-btn');
    const successEl = document.getElementById('forgot-success');
    const errorEl = document.getElementById('forgot-error');

    successEl.classList.add('hidden');
    errorEl.classList.add('hidden');

    if (!validateEmail(contact)) {
        errorEl.textContent = "Please enter a valid email address.";
        errorEl.classList.remove('hidden');
        return;
    }

    btn.classList.add('is-loading');

    try {
        await sendPasswordResetEmail(auth, contact);
        successEl.textContent = `A reset link has been sent to ${contact}. Please check your inbox.`;
        successEl.classList.remove('hidden');
        document.getElementById('forgot-form').reset();
    } catch (error) {
        errorEl.textContent = error.message;
        errorEl.classList.remove('hidden');
    } finally {
        btn.classList.remove('is-loading');
    }
};


lucide.createIcons();