document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const users = [
        { username: "admin", password: "password123", role: "admin" },
        { username: "clasa5", password: "clasa5pass", role: "student" },
        { username: "clasa6", password: "clasa6pass", role: "student" },
        { username: "clasa7", password: "clasa7pass", role: "student" },
        { username: "clasa8", password: "clasa8pass", role: "student" },
        { username: "clasa9", password: "clasa9pass", role: "student" },
        { username: "clasa10", password: "clasa10pass", role: "student" },
        { username: "clasa11", password: "clasa11pass", role: "student" },
        { username: "clasa12", password: "clasa12pass", role: "student" }
    ];
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("login-message");
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        message.style.color = "green";
        message.textContent = `Autentificare reușită! Bine ai venit, ${user.username}!`;
        

        localStorage.setItem("loggedInUser", user.username);
        
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    } else {
        message.style.color = "red";
        message.textContent = "Nume utilizator sau parolă incorectă.";
    }
});

function updateLoginNavItem() {
    const loggedInUser = localStorage.getItem("loggedInUser");
    const loginNavItem = document.getElementById("login-nav-item");
    
    if (loggedInUser && loginNavItem) {
        loginNavItem.innerHTML = `<a href="#">${loggedInUser}</a>`;
    }
}

document.addEventListener("DOMContentLoaded", updateLoginNavItem);
