const ref = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

ref.input.addEventListener("input", onNameInput);

function onNameInput(event) {
  if (!!event.currentTarget.value) {
    return (ref.output.textContent = event.currentTarget.value);
  } else {
    return (ref.output.textContent = "Anonymous");
  }
}
