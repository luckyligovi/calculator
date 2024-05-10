const display = document.getElementById("display");

// function appendToDisplay(input) {
//   display.value += input;
//   console.log(input);
// }

// function clearDisplay() {
//   display.value = "";
// }

function appendToDisplay(input){
    // Check if the input is an operator
    if (input === '+' || input === '-' || input === '*' || input === '/') {
        // Check if the last character in the display is already an operator
        if (display.value.length > 0 && display.value.slice(-1) === '+' || display.value.slice(-1) === '-' || display.value.slice(-1) === '*' || display.value.slice(-1) === '/') {
            // Replace the existing operator with the new one
            display.value = display.value.slice(0, -1) + input;
        } else {
            // Append the operator to the display
            display.value += input;
        }
    } else {
        // Append the input to the display
        display.value += input;
    }
    console.log(input);
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
