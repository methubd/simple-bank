function getValueFromInputById(inputFieldId) {
  const inputFieldElement = document.getElementById(inputFieldId);
  const inputFieldString = inputFieldElement.value;
  const inputFieldValue = parseFloat(inputFieldString);
  inputFieldElement.value = "";
  return inputFieldValue;
}

function getValueFromSpanById(spanFieldId) {
  const spanFieldElement = document.getElementById(spanFieldId);
  const spanFieldString = spanFieldElement.innerText;
  const spanFieldValue = parseFloat(spanFieldString);
  return spanFieldValue;
}

function setAnewValue(counterId, newValue) {
  const counterElement = document.getElementById(counterId);
  counterElement.innerText = newValue;
}
