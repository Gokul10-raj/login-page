document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    // Form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = passwordInput.value;
        const rememberMe = document.querySelector('input[name="remember"]').checked;
        
        // Simple validation
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }
        
        // Collect login data
        const loginData = {
            email: email,
            password: password, // In a real app, never store plain passwords
            timestamp: new Date().toISOString(),
            rememberMe: rememberMe,
            userAgent: navigator.userAgent,
            ip: '' // In a real app, you'd get this from the server
        };
        
        // Store login attempt (for demo purposes - in real app, send to server)
        storeLoginAttempt(loginData);
        
        // Show success message (in real app, you'd redirect or handle auth)
        alert('Login attempt recorded. In a real app, this would authenticate the user.');
        
        // Reset form
        loginForm.reset();
    });
    
    // Function to store login attempts in localStorage
    function storeLoginAttempt(data) {
        let loginAttempts = JSON.parse(localStorage.getItem('loginAttempts')) || [];
        
        // For demo purposes, we're not storing the actual password in a real scenario
        const storedData = {
            email: data.email,
            timestamp: data.timestamp,
            rememberMe: data.rememberMe,
            userAgent: data.userAgent,
            ip: data.ip
        };
        
        loginAttempts.push(storedData);
        localStorage.setItem('loginAttempts', JSON.stringify(loginAttempts));
        
        console.log('Login attempt stored:', storedData);
        console.log('All attempts:', loginAttempts);
    }
    
    // For demonstration: Display stored attempts in console
    function displayStoredAttempts() {
        const attempts = JSON.parse(localStorage.getItem('loginAttempts')) || [];
        console.log('Stored login attempts:', attempts);
    }
    
    displayStoredAttempts();
});