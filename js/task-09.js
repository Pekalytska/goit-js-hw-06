function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    changeColorBtn: document.querySelector(".change-color"),
    colorValue: document.querySelectorAll(".color"),
    body: document.querySelector("body"),
}

console.dir(refs.colorValue[0].textContent)

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
    refs.body.style.background = getRandomHexColor();
    refs.colorValue[0].textContent = refs.body.style.background; 
}
