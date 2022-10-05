var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

// add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
    // when we change the input and output type value, we need to update the inputTypeValue and resultTypeValue

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // now compare input and resultType value and add formula

    if(inputTypeValue === "meter" && resultTypeValue === "kilometer") {
        // this is meter to kilometer formula
        result.value = Number(input.value) * 0.001;
    } else if(inputTypeValue === "meter" && resultTypeValue === "centimeter") {
        // this is meter to centimeter formula
        result.value = Number(input.value) * 100;
    } else if(inputTypeValue === "meter" && resultTypeValue === "meter") {
        // this is meter to meter formula
        result.value = input.value
    }

    if(inputTypeValue === "kilometer" && resultTypeValue === "meter") {
        // this is kilometer to meter formula
        result.value = Number(input.value) * 1000;
    } else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter") {
        // this is kilometer to centimeter formula
        result.value = Number(input.value) * 100000;
    } else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer") {
        // this is kilometer to kilometer formula
        result.value = input.value
    }

    if(inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        // this is centimeter to kilometer formula
        result.value = Number(input.value) * 0.00001;
    } else if(inputTypeValue === "centimeter" && resultTypeValue === "meter") {
        // this is centimeter to meter formula
        result.value = Number(input.value) * 0.01;
    } else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter") {
        // this is centimeter to centimeter formula
        result.value = input.value
    }
}