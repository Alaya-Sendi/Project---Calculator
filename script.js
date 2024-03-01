$(document).ready(function () {
    var currentInput = "";
    var currentOperator = "";

    $('button').on('click', function () {
        var buttonValue = $(this).text();

        if (buttonValue >= '0' && buttonValue <= '9') {
            currentInput += buttonValue;
        } else if (buttonValue === 'C') {
            currentInput = "";
            currentOperator = "";
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            currentOperator = buttonValue;
            currentInput += ' ' + currentOperator + ' ';
        }

        updateDisplay();
    });

    function calculateResult() {
        var parts = currentInput.split(' ');
        var num1 = parseFloat(parts[0]);
        var num2 = parseFloat(parts[2]);

        switch (currentOperator) {
            case '+':
                currentInput = num1 + num2;
                break;
            case '-':
                currentInput = num1 - num2;
                break;
            case '*':
                currentInput = num1 * num2;
                break;
            case '/':
                currentInput = num1 / num2;
                break;
        }

        currentOperator = "";
    }

    function updateDisplay() {
        $('#result').text(currentInput || "0");
    }
});
