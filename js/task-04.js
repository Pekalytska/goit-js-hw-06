//--------------------1-st variant----------------------//
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const currentValue = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    return currentValue.textContent = counterValue;
}

function onIncrementClick() {
    counterValue += 1;
    return currentValue.textContent = counterValue;
}

//--------------------2-nd variant----------------------//
//const decrementBtn = document.querySelector('[data-action="decrement"]');
//const incrementBtn = document.querySelector('[data-action="increment"]');
//const counterValue = document.querySelector("#value");

//decrementBtn.addEventListener('click', onDecrementClick);
//incrementBtn.addEventListener('click', onIncrementClick);

//function onDecrementClick() {
//    return counterValue.textContent = Number(counterValue.textContent) - 1;
//}

//function onIncrementClick() {
//    return counterValue.textContent = Number(counterValue.textContent) + 1;
//}
