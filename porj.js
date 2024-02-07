document.addEventListener('DOMContentLoaded', function () {
    const numberInput = document.getElementById('numberInput');
    const submitButton = document.getElementById('submitButton');
    const output = document.getElementById('output');

    submitButton.addEventListener('click', () => {
        const inputValue = parseInt(numberInput.value);

        if (isNaN(inputValue)) {
            output.textContent = "Please enter a valid number.";
            return;
        }

        let result = '';

        for (let i = 1; i <= inputValue; i++) {
            if (i % 2 === 0) {
                result += `${i} is even.<br>`;
            } else {
                result += `${i} is odd.<br>`;
            }
        }

        output.innerHTML = result;
    });
});
