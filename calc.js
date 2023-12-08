const display = document.querySelector("#display")
// Get all the buttons
const buttons = document.querySelectorAll('button')

// Add click event listeners to all buttons
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        handleButtonClick(button.innerText);
    })
});

// Checking the clicked button
function handleButtonClick(value) {
    if (value === "=") {
        calculate();
    } else if (value === "DE") {
        deleting();
    } else if (value === "AC") {
        claerAll();
    } else {
        appendDisplay(value);
    }
}

// function for displaying value of the clicked button

function appendDisplay(value) {
    display.value += value;
};

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function claerAll() {
    display.value = '';
}

function deleting() {
    display.value = display.value.slice(0, -1);
}