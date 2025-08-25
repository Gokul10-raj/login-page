# Professional Login Page

A clean, responsive login page with login attempt tracking.

## Features
- Modern UI with responsive design
- Form validation
- Password visibility toggle
- Login attempt tracking (stored in localStorage for demo purposes)
- Remember me functionality

## Important Security Note
This implementation stores login attempts in the browser's localStorage for demonstration purposes only. In a production environment:

1. Never store passwords or sensitive data in localStorage
2. Implement proper server-side authentication
3. Use HTTPS for all communications
4. Consider implementing CSRF protection
5. Store data in a secure database

## Setup
1. Clone this repository
2. Open `index.html` in a web browser
3. Test the login form (data will be stored in localStorage)

## Viewing Collected Data
To view collected login attempts:
1. Open browser developer tools (F12)
2. Go to the Console tab to see logged attempts
3. Or check Application > LocalStorage in Chrome DevTools