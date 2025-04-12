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

//To-Do-List

document.addEventListener("DOMContentLoaded", loadTasks);
document.getElementById("taskForm").addEventListener("submit", addTask);

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task, index) => displayTask(task, index));
}

function addTask(event) {
    event.preventDefault();
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;
    const date = document.getElementById("taskDate").value;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push({ title, description, date });
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask({ title, description, date }, tasks.length - 1);
    document.getElementById("taskForm").reset();
}

function displayTask(task, index) {
    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

    listItem.innerHTML = `
        <div>
            <strong style="font-size: 1rem;">${task.title}</strong><br> - 
            <span style="font-size: 0.8rem;">${task.description}</span><br>
            <small style="font-size: 0.6rem;">${task.date || ''}</small> 
        </div>
        <span>
            <button class='to-do btn-sm me-2' onclick='editTask(${index})'>Edit</button>
            <button class='to-do btn-sm' onclick='deleteTask(${index})'>Delete</button>
        </span>`;
    taskList.appendChild(listItem);
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    const newTitle = prompt("Edit Task Title", tasks[index].title);
    const newDescription = prompt("Edit Task Description", tasks[index].description);
    const newDate = prompt("Edit Task Date", tasks[index].date); 

    if (newTitle && newDescription && newDate) {
        tasks[index] = { title: newTitle, description: newDescription, date: newDate }; // ✅ Save updated date
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
