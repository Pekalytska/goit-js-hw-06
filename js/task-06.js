const inputValue = document.querySelector("#validation-input");
inputValue.addEventListener("blur", onCheckValidValue);

function onCheckValidValue(event) {
  const lengthOfInputValue = event.currentTarget.value.split("").length;

  inputValue.classList.add("invalid");

  if (lengthOfInputValue === Number(inputValue.dataset.length)) {
    inputValue.classList.replace("invalid", "valid");
  }
}
