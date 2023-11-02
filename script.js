const $display = document.getElementById("display"),
  $btn = document.querySelectorAll(".btn");

let calculation = [];
let accumalate = "";
let res;

function calculate(btn) {
  let value = btn.innerText;

  if (value === "AC") {
    calculation = [];
    $display.value = "";
  } else if (value === "←") {
    calculation.pop();
    $display.value = calculation.join("");
  } else if (value === "=") {
    calculation = [];
    res = eval(accumalate);
    $display.value = res;
    calculation.push(res);
  } else if (value === "%") {
    $display.value = parseFloat(calculation.join("")) / 100;
    calculation = [];
  } else {
    calculation.push(value);
    accumalate = calculation.join("");
    $display.value = accumalate;
  }
}

$btn.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
);
