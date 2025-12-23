import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        const appId = typeof __app_id !== 'undefined' ? __app_id : 'movie-app-demo';
        const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app);
        const db = getFirestore(app);

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

            // 1. Password Match Validation
            if (password !== confirmPassword) {
                errorEl.textContent = "Error: Passwords do not match.";
                errorEl.classList.remove('hidden');
                return;
            }

            btn.classList.add('is-loading');

            try {
                // Sign in the user
                await signInAnonymously(auth);
                const uid = auth.currentUser.uid;
                
                // Save their profile
                await setDoc(doc(db, 'artifacts', appId, 'users', uid, 'profile'), {
                    username, 
                    contact, 
                    createdAt: new Date().toISOString()
                });

                // Redirect to the main app page
                window.location.href = 'index.html';
                
            } catch (err) {
                errorEl.textContent = "Error: " + err.message;
                errorEl.classList.remove('hidden');
            } finally {
                btn.classList.remove('is-loading');
            }
        };

        lucide.createIcons();