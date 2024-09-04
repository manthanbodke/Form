document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Clear previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Username validation
    if (username === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    // Email validation
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits long and numeric.';
        isValid = false;
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@])[A-Za-z\d&$#@]{7,}$/;
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character (&, $, #, @).';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        isValid = false;
    }

    // Submit the form if valid
    if (isValid) {
        // Optionally, you could submit the form or handle successful validation here
        alert('Form submitted successfully!');
        // document.getElementById('registrationForm').submit(); // Uncomment this line if you want to submit the form
    }
});
