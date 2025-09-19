document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (email && password) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "SignUp successful",
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = "body.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter email and password!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
});

const passwordInput = document.getElementById("password");
const toggle = document.getElementById("passwordToggle");
toggle.addEventListener("click", () => {
  const eyeIcon = toggle.querySelector(".eye-icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.add("show-password");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("show-password");
  }

});
