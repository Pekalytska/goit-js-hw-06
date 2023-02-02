const ref = {
    rangeInput: document.querySelector("#font-size-control"),
    textValue: document.querySelector("#text"),
}

ref.rangeInput.addEventListener("change", onRangeChange);

const initialFontSize = parseInt(getComputedStyle(ref.textValue).fontSize);
const { min, max } = ref.rangeInput;
const middleOfRange = Number(min) + (max - min) / 2;

function onRangeChange(event) {
    const stepRange = 5;
    
  const fontSizeChange = Math.round(
    (event.currentTarget.value - middleOfRange) / stepRange
  );

  ref.textValue.style.fontSize = String(initialFontSize + fontSizeChange) + "px";
}
