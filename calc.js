const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
  console.log(input);
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // display.value = eval(display.value)
    let result = eval(display.value);
    if (result !== undefined) {
      display.value = result;
    } else {
      display.value = "";
    }
  } catch (error) {
    display.value = "Error";
  }
}

function eraseSingleInput() {
  display.value = display.value.slice(0, -1);
}
