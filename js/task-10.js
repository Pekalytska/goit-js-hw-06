function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controlsField: document.querySelector("#controls"),
  boxesField: document.querySelector("#boxes"),
  creatBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

refs.creatBtn.addEventListener("click", onCreatBoxes);
refs.destroyBtn.addEventListener("click", onDestroyBoxes);

let initialSizeOfDiv = 30;

function onCreatBoxes() {
  const input = refs.controlsField.firstElementChild;
  if (!input.value) {
    return alert("Please choose a number of elements!!!");
  }

  const arrOfDivs = [];

  for (let i = 0; i < input.value; i += 1) {
    const div = document.createElement("div");
    div.style.width = initialSizeOfDiv + "px";
    div.style.height = initialSizeOfDiv + "px";
    div.style.background = getRandomHexColor();
    arrOfDivs.push(div);
    initialSizeOfDiv += 10;
  }

  refs.boxesField.style.display = "flex";
  refs.boxesField.append(...arrOfDivs);
}

function onDestroyBoxes() {
  refs.boxesField.innerHTML = "";
  initialSizeOfDiv = 30;
}
