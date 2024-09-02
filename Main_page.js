document.addEventListener('DOMContentLoaded', function () {
    const learnMoreButton = document.getElementById('learnMoreButton');
    const infoSection = document.getElementById('info');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    const loginToggle = document.getElementById('loginToggle');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    // Toggle visibility of the info section
    learnMoreButton.addEventListener('click', function () {
        infoSection.classList.toggle('hidden');
        learnMoreButton.textContent = infoSection.classList.contains('hidden') ? 'Learn More' : 'Show Less';
    });

    // Toggle mobile menu
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Open login modal
    loginToggle.addEventListener('click', function () {
        loginModal.classList.add('active');
    });

    // Close login modal
    closeModal.addEventListener('click', function () {
        loginModal.classList.remove('active');
    });

    // Handle login form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const userID = document.getElementById('userID').value;
        const password = document.getElementById('password').value;

        // Simple validation (replace with actual authentication logic)
        if (userID === 'admin' && password === 'password') {
            loginMessage.textContent = 'Login successful!';
            loginMessage.style.color = 'green';
        } else {
            loginMessage.textContent = 'Invalid credentials. Please try again.';
            loginMessage.style.color = 'red';
        }
    });
});
