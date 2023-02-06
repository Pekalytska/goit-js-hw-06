const inputValue = document.querySelector("#validation-input");
inputValue.addEventListener("blur", onCheckValidValue);

function onCheckValidValue(event) {
  const lengthOfInputValue = event.currentTarget.value.split("").length;

  if (lengthOfInputValue === Number(inputValue.dataset.length)) {
    inputValue.classList.add("valid");
    inputValue.classList.remove("invalid");
  } else {
    inputValue.classList.add("invalid");
    inputValue.classList.remove("valid");
  }
}
