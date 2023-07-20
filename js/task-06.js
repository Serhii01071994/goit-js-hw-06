const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);

function onBlur() {
  const expectLengt = input.getAttribute("data-length");
  const actualLength = input.value.length;

  if (actualLength === Number(expectLengt)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
}
