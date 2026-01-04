document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message  = document.getElementById("loginMessage");

  if (username === "rafly" && password === "290606") {
    localStorage.setItem("login", "true");
    localStorage.setItem("username", username);

    message.innerHTML = "<span class='text-success'>Login berhasil! Mengalihkan...</span>";

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  } else {
    message.innerHTML = "<span class='text-danger'>Username atau password salah!</span>";
  }
});
