document.addEventListener("DOMContentLoaded", function() {
    const currentNumberElement = document.getElementById("current-number");
    const numberInputElement = document.getElementById("number-input");
    const previousNumbersElement = document.getElementById("previous-numbers");
    const previousNumbers = [];

    numberInputElement.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const number = parseInt(numberInputElement.value);
            if (!isNaN(number)) {
                displayCurrentNumber(number);
                displayPreviousNumbers(number);
                numberInputElement.value = "";
            }
        }
    });

    function displayCurrentNumber(number) {
        currentNumberElement.textContent = number;
    }

    function displayPreviousNumbers(number) {
        const span = document.createElement("span");
        span.textContent = number + " ";
        previousNumbersElement.appendChild(span);
    }
});
