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
refs.destroyBtn.addEventListener('click', onDestroyBoxes);

function onCreatBoxes() {
  const input = refs.controlsField.firstElementChild;
  if (!input.value) {
    return alert("Please choose a number of elements!!!");
  }

  const arrOfDivs = [];

  for (let i = 0, j = 30; i < input.value; i += 1, j += 10) {
    const div = document.createElement("div");
    div.style.width = j + "px";
    div.style.height = j + "px";
    div.style.background = getRandomHexColor();
    arrOfDivs.push(div);
    console.log(arrOfDivs);
  }

  refs.boxesField.style.display = "flex";
  refs.boxesField.append(...arrOfDivs);
}

function onDestroyBoxes() {
    refs.boxesField.innerHTML = "";
}

//Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >,
//    скільки вказано в amount і додає їх у div#boxes.
