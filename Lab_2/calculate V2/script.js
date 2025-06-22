window.onload = function () {
    let a = '';
    let b = '';
    let expressionResult = '';
    let selectedOperation = null;

    let outputElement = document.getElementById("result");
    let digitButtons = document.querySelectorAll('[id^="btn_digit_"]');

    function onDigitButtonClicked(digit) {
        if (!selectedOperation) {
            if ((digit !== '.') || (digit === '.' && !a.includes(digit))) {
                a += digit;
            }
            outputElement.value = a;
        } else {
            if ((digit !== '.') || (digit === '.' && !b.includes(digit))) {
                b += digit;
                outputElement.value = b;
            }
        }
    }

    digitButtons.forEach(button => {
        button.onclick = function () {
            const digitValue = button.innerHTML.trim();
            onDigitButtonClicked(digitValue);
        };
    });

    document.getElementById("btn_op_mult").onclick = function () {
        if (a === '') return;
        selectedOperation = 'x';
    };
    document.getElementById("btn_op_plus").onclick = function () {
        if (a === '') return;
        selectedOperation = '+';
    };
    document.getElementById("btn_op_minus").onclick = function () {
        if (a === '') return;
        selectedOperation = '-';
    };
    document.getElementById("btn_op_div").onclick = function () {
        if (a === '') return;
        selectedOperation = '/';
    };

    document.getElementById("btn_op_clear").onclick = function () {
        a = '';
        b = '';
        selectedOperation = '';
        expressionResult = '';
        outputElement.value = 0;
    };

    document.getElementById("btn_op_equal").onclick = function () {
        if (a === '' || b === '' || !selectedOperation)
            return;

        switch (selectedOperation) {
            case 'x':
                expressionResult = (+a) * (+b);
                break;
            case '+':
                expressionResult = (+a) + (+b);
                break;
            case '-':
                expressionResult = (+a) - (+b);
                break;
            case '/':
                expressionResult = (+a) / (+b);
                break;
        }

        a = expressionResult.toString();
        b = '';
        selectedOperation = null;
        outputElement.value = a;
    };

    document.getElementById("btn_op_sign").onclick = function () {
        if (!selectedOperation && a !== '') {
            a = (-parseFloat(a)).toString();
            outputElement.value = a;
        } else if (b !== '') {
            b = (-parseFloat(b)).toString();
            outputElement.value = b;
        }
    };

    document.getElementById("btn_op_percent").onclick = function () {
        if (!selectedOperation && a !== '') {
            a = (parseFloat(a) / 100).toString();
            outputElement.value = a;
        } else if (b !== '') {
            b = (parseFloat(b) / 100).toString();
            outputElement.value = b;
        }
    };

    document.getElementById("btn_op_backspace").onclick = function () {
        if (!selectedOperation && a !== '') {
            a = a.slice(0, -1);
            outputElement.value = a;
        } else if (b !== '') {
            b = b.slice(0, -1);
            outputElement.value = b;
        }
    };

    document.getElementById("btn_op_sqrt").onclick = function () {
        if (!selectedOperation && a !== '') {
            a = Math.sqrt(parseFloat(a)).toString();
            outputElement.value = a;
        } else if (b !== '') {
            b = Math.sqrt(parseFloat(b)).toString();
            outputElement.value = b;
        }
    };

    document.getElementById("btn_op_squad").onclick = function () {
        if (!selectedOperation && a !== '') {
            a = Math.pow(parseFloat(a), 2).toString();
            outputElement.value = a;
        } else if (b !== '') {
            b = Math.pow(parseFloat(b), 2).toString();
            outputElement.value = b;
        }
    };

    document.getElementById("btn_op_factorial").onclick = function () {
        function factorial(n) {
            if (n < 0) return 'Error';
            let f = 1;
            for (let i = 2; i <= n; i++) f *= i;
            return f;
        }
        if (!selectedOperation && a !== '') {
            a = factorial(parseInt(a)).toString();
            outputElement.value = a;
        } else if (b !== '') {
            b = factorial(parseInt(b)).toString();
            outputElement.value = b;
        }
    };

    document.getElementById("btn_digit_000").onclick = function () {
        if (!selectedOperation) {
            a += '000';
            outputElement.value = a;
        } else {
            b += '000';
            outputElement.value = b;
        }
    };
};