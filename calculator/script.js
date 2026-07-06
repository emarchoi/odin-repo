const display = document.querySelector(".display h3");

const calcuBtn = document.querySelectorAll(".buttons button");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#delete");
const calculateBtn = document.querySelector("#calculate");

calcuBtn.forEach(button => {
    
    button.addEventListener("click", () => {

        display.textContent += button.value;

    });

});

clearBtn.addEventListener("click", () => {

    display.textContent = "";
});

calculateBtn.addEventListener("click", () => {

    display.textContent = calculate(display.textContent);

});

function calculate(num){
    return eval(num);
}