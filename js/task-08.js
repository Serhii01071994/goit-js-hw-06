const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.target.elements;

  if (email.value.trim() === "" || password.value.trim() === "") {
    alert("Заповни усі поля");
    return;
  }
  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.target.reset();
});
