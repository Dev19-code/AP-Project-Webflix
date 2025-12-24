/**
 * Setup visibility toggle for password fields.
 * @param {string} toggleId - ID of the toggle button.
 * @param {string} inputId - ID of the input field.
 */
export const setupPasswordToggle = (toggleId, inputId) => {
    const toggle = document.getElementById(toggleId);
    const input = document.getElementById(inputId);
    if (toggle && input) {
        toggle.onclick = (e) => {
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            toggle.innerHTML = isPassword ? '<i data-lucide="eye-off"></i>' : '<i data-lucide="eye"></i>';
            if (typeof lucide !== 'undefined') lucide.createIcons();
        };
    }
};

/**
 * Validate email format.
 * @param {string} email
 * @returns {boolean}
 */
export const validateEmail = (email) => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
};

/**
 * Validate password complexity.
 * Must contain at least one letter, one number, and be at least 8 characters long.
 * @param {string} password
 * @returns {boolean}
 */
export const validatePassword = (password) => {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    return regexp.test(password);
};