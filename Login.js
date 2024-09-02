const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// Event listener for sign-up button
sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");

    // Store data in localStorage
    const username = document.getElementById("signUpUsername").value;
    const email = document.getElementById("signUpEmail").value;
    const password = document.getElementById("signUpPassword").value;

    if (username && email && password) {
        // Save data to localStorage
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Sign-up data saved!");
    } else {
        alert("Please fill in all fields.");
    }
});

// Event listener for sign-in button
sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");

    // Retrieve data from localStorage
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    const signInEmail = document.getElementById("signInEmail").value;
    const signInPassword = document.getElementById("signInPassword").value;

    if (signInEmail === storedEmail && signInPassword === storedPassword) {
        alert("Sign-in successful!");
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
