//Login

document.addEventListener("DOMContentLoaded", function() {
    function validateForm() {
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
        
        alert("Login successfully!");
        return true;
    }

    document.querySelector(".login-btn").addEventListener("click", validateForm);
});

//Registration

document.addEventListener("DOMContentLoaded", function () {
    function validateForm() {
        const fullName = document.getElementById("fullName")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const password = document.getElementById("password")?.value;
        const confirmPassword = document.getElementById("confirmPassword")?.value;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!fullName || !email || !password || !confirmPassword) {
            alert("All fields are required.");
            return false;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }

        alert("Registration successful!");
        return true;
    }
    const registerButton = document.querySelector(".button");
    if (registerButton) {
        registerButton.addEventListener("click", validateForm);
    }
});

//Contact

document.addEventListener("DOMContentLoaded", function () {
    function validateContactForm(event) {
        event.preventDefault();


        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !subject || !message) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "All fields are required!"
            });
            return;
        }

        if (!emailPattern.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address."
            });
            return;
        }

        // Success message with SweetAlert
        Swal.fire({
            icon: "success",
            title: "Thank You!",
            text: "Thanks for contacting us. We'll get back to you soon!",
            confirmButtonText: "OK"
        });
        document.getElementById("contactForm").reset();
    }
    document.getElementById("contactForm").addEventListener("submit", validateContactForm);
});