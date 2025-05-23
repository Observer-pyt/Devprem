document.addEventListener("DOMContentLoaded", function () {
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Toggle Between Login and Register
  showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.remove("active");
      registerForm.classList.add("active");
  });

  showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerForm.classList.remove("active");
      loginForm.classList.add("active");
  });

  // Handle Registration
  registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("register-name").value;
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;

      if (localStorage.getItem(email)) {
          alert("User already exists! Please log in.");
      } else {
          const user = { name, email, password };
          localStorage.setItem(email, JSON.stringify(user));
          alert("Registration successful! Redirecting...");
          window.location.href = "welcome.html"; // Redirect to Welcome Page
      }
  });

  // Handle Login
  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      const storedUser = localStorage.getItem(email);

      if (storedUser) {
          const user = JSON.parse(storedUser);
          if (user.password === password) {
              alert("Login successful! Redirecting...");
              sessionStorage.setItem("loggedInUser", email);
              window.location.href = "dashboard.html"; // Redirect to Dashboard
          } else {
              alert("Incorrect password! Try again.");
          }
      } else {
          alert("User not found! Please register.");
      }
  });
});
