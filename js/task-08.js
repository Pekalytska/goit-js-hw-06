const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (!email.value || !password.value) {
    return alert("Please, fill in all fields");
  }

  const objOfValues = {
    email: email.value,
    password: password.value,
  };
  console.log(objOfValues);

  event.currentTarget.reset();
}
