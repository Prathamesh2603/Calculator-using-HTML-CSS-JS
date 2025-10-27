const inputBox = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.innerText === "=") {
            string = eval(string);
            inputBox.value = string
        } else if (button.innerText === "AC") {
            string = "";
            inputBox.value = string;
        } else if (button.innerText === "DEL") {
            string = string.substring(0, string.length-1);
            inputBox.value = string;
        } else {
            string += button.innerText;
            inputBox.value = string;
        }
    });
});
