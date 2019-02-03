const calculate = (pValue, operation, dValue) => {
    if (pValue === null && operation === null) {
        return dValue
    } else if (pValue === null) {
        return doMath(dValue, operation, dValue)
    } else {
        return doMath(pValue, operation, dValue)
    }
}

const doMath = (a, operation, b) => {
    if (operation === "+") {
        return addition(a, b);
    } else if (operation === "-") {
        return subtraction(a, b);
    } else if (operation === "*") {
        return multiplication(a, b);
    } else if (operation === "/") {
        return division(a, b);
    } else if (operation === "%") {
        return percentage(a);
    } else if (operation === "+-") {
        return invert(a);
    }
}

const addition = (num1, num2) => {
    return num1 + num2;
}

const subtraction = (num1, num2) => {
    return num1 - num2;
}

const multiplication = (num1, num2) => {
    return num1 * num2;
}

const division = (num1, num2) => {
    return num1 / num2;
}

const percentage = (num) => {
    return num / 100;
}

const invert = (num) => {
    if (num > 0) {
        return num * -1
    } else if (num < 0) {
        return num * -1;
    } else {
        return num;
    }
}



console.log(calculate(-6, "+-", null))


export {
    calculate,
    doMath,
    addition,
    subtraction,
    multiplication,
    division,
    percentage,
    invert

}