const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;

  const data = {
    email: email.value,
    password: password.value,
  };
  if (data.email === "" || data.password === "") {
    return alert("All fields must be filled in!");
  }
  console.log(data);
  form.reset();
});
