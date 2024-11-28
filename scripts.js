document.getElementById('get-started-btn').addEventListener('click', function () {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginStatusMessage = document.getElementById('loginStatusMessage');

    // Example credentials
    const validUsername = 'student';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
        return false; // Prevent actual form submission for this example
    } else {
        loginStatusMessage.textContent = 'Invalid username or password';
        return false; // Prevent actual form submission for this example
    }
}

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Toggle the eye icon
    this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('statusMessage');

    if (name === '' || email === '' || message === '') {
        statusMessage.textContent = 'All fields are required.';
        statusMessage.style.color = 'red';
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        statusMessage.textContent = 'Please enter a valid email address.';
        statusMessage.style.color = 'red';
        return false;
    }

    statusMessage.textContent = 'Form submitted successfully!';
    statusMessage.style.color = 'green';
    return true;
}

console.log('Website loaded successfully');
