document.addEventListener("DOMContentLoaded", function() {
    const bingoNumbersElement = document.getElementById("bingo-numbers");
    const numberInputElement = document.getElementById("number-input");
    const numbers = [];

    numberInputElement.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            const number = parseInt(numberInputElement.value);
            if (!isNaN(number)) {
                numbers.push(number);
                displayNumbers();
                numberInputElement.value = "";
            }
        }
    });

    function displayNumbers() {
        bingoNumbersElement.innerHTML = "";
        numbers.forEach(function(number, index) {
            const fontSize = 20 - index * 2;
            const span = document.createElement("span");
            span.textContent = number;
            span.style.fontSize = fontSize + "px";
            bingoNumbersElement.appendChild(span);
            bingoNumbersElement.appendChild(document.createTextNode(" "));
        });
    }
});
