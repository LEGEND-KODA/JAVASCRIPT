
//factorial function
function calculateFactorial() {
    let number = Number(document.getElementById("factorial").value);
    let factorial = 1;

    for (let i = number; i >= 1; i--) {
        factorial = factorial * i;
    }

    document.getElementById("factorialResult").innerHTML =
        number + "! = " + factorial;
}


//binary calulation functions    
function decimalToBinary() {
    let number = Number(document.getElementById("decimal").value);
    let binary = "";

    if (number == 0) {
        binary = "0";
    } else {
        for (; number > 0;) {
            let remainder = number % 2;
            binary = remainder + binary;
            number = Math.floor(number / 2);
        }
    }

    document.getElementById("binaryResult").innerHTML =
        "Binary = " + binary;
}


function binaryToDecimal() {
    let binary = document.getElementById("binary").value;
    let decimal = 0;
    let power = 0;

    for (let i = binary.length - 1; i >= 0; i--) {
        decimal = decimal + Number(binary[i]) * Math.pow(2, power);
        power++;
    }

    document.getElementById("decimalResult").innerHTML =
        "Decimal = " + decimal;
}

//sume of factorial numbers

function sumNumbers() {
    let number = Number(document.getElementById("factorialNumber").value);
    let sum = 0;

    for (let i = number; i >= 1; i--) {
        sum = sum + i;
    }

    document.getElementById("result").innerHTML = "Sum = " + sum;
}


//evaluation table

function calculate() {
    let number = Number(document.getElementById("evaluationTable").value);
    let operation = document.getElementById("operation").value;
    let result = "";

    for (let i = 1; i <= 10; i++) {
        if (operation == "addition") {
            result += number + " + " + i + " = " + (number + i) + "<br>";
        }

        else if (operation == "subtraction") {
            result += number + " - " + i + " = " + (number - i) + "<br>";
        }

        else if (operation == "multiplication") {
            result += number + " × " + i + " = " + (number * i) + "<br>";
        }

        else if (operation == "division") {
            result += number + " ÷ " + i + " = " + (number / i) + "<br>";
        }

    }

    document.getElementById("evaluationResult").innerHTML = result;

}
