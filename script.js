const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    try {
      output = eval(output);
      display.value = output;
    } catch (error) {
      output = "";
      display.value = "Error";
    }
  } else if (btnValue === "AC") {
    output = "";
    display.value = output;
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
    display.value = output;
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;

    if (btnValue === "%") {
      if (output !== "") {
        output += "%";
        display.value = output;
      }
    } else {
      output += btnValue;
      display.value = output;
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
