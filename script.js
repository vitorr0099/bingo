document.addEventListener("DOMContentLoaded", function() {
    const currentNumberElement = document.getElementById("current-number");
    const numberInputElement = document.getElementById("number-input");
    const previousNumbersList = document.getElementById("previous-numbers-list");

    numberInputElement.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const number = parseInt(numberInputElement.value);
            if (!isNaN(number)) {
                displayCurrentNumber(number);
                displayPreviousNumber(number);
                numberInputElement.value = "";
            }
        }
    });

    function displayCurrentNumber(number) {
        currentNumberElement.textContent = number;
    }

    function displayPreviousNumber(number) {
        const div = document.createElement("div");
        div.textContent = number;
        previousNumbersList.appendChild(div);
    }
});
