let display = document.getElementById("display");

function append(value) {
  if (display.innerText === "0" && value !== ".") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.innerText = eval(display.innerText.replace(/×/g, "*").replace(/÷/g, "/"));
  } catch (e) {
    display.innerText = "Error";
  }
}
