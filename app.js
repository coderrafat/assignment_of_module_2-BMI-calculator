let calculateBtn = document.getElementById("calculateBtn");
let weightInput = document.getElementById("weightInput");
let heightInput = document.getElementById("heightInput");
let resultDiv = document.getElementById("result");
let form = document.getElementById('form');


function calculateBMI() {
    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value) / 100; // convert cm to m
    let bmi = weight / (height * height);

    if (isNaN(weight && height)) {
        resultDiv.innerHTML = `Please input the field`;
        resultDiv.style.color = 'red';
        form.style.height = '410px';
    } else {
        resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
        resultDiv.style.color = '#42ba96';
        form.style.height = '410px';
    }

}

calculateBtn.addEventListener("click", calculateBMI);


