const inputMinNumber = document.querySelector('#minNumber');
const inputMaxNumber = document.querySelector('#maxNumber');
const btnGenerate = document.querySelector('#btnAction');
const result = document.querySelector('#randomResult');

window.addEventListener('DOMContentLoaded', () => {
    console.log('loaded...');

    // Funcion que devuelve un numero random a partir de un numero maximo pasado por parametro
    function generateNumber(minNumber, maxNumber) {
        return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
    }

    function isEmpty(input) {
        let value = input.value;
        if (value == '') {
            value = 0;
        } else {
            value = input.value;
        }
        return value;
    }

    function checkValue(value) {
        let newValue = value;
        newValue = newValue > 999999999999 ? 999999999999 : newValue;
        newValue = newValue < 0 ? 0 : newValue;
        return newValue;
    }

    inputMinNumber.addEventListener('keypress', () => {
        inputMinNumber.value = checkValue(inputMinNumber.value);
    });

    inputMaxNumber.addEventListener('keypress', () => {
        inputMaxNumber.value = checkValue(inputMaxNumber.value);
    });

    btnGenerate.addEventListener('click', () => {
        let minValue = isEmpty(inputMinNumber);
        let maxValue = isEmpty(inputMaxNumber);

        minValue = checkValue(minValue);
        maxValue = checkValue(maxValue);

        if (minValue > maxValue) {
            inputMinNumber.value = maxValue;
            inputMaxNumber.value = minValue;

            minValue = inputMinNumber.value;
            maxValue = inputMaxNumber.value;
        }

        result.innerHTML = generateNumber(minValue, maxValue);
    });

});

