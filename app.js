function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    if (weight === '' || height === '') {
      document.getElementById('result').innerHTML = 'Please enter a value for weight and height';
      return;
    }
    const bmi = weight / (height / 100 * height / 100);
    document.getElementById('result').innerHTML = 'Your BMI is ' + bmi.toFixed(2);
  
    let bmiDescription = '';
    if (bmi < 18.5) {
      bmiDescription = 'Underweight';
    } else if (bmi < 25) {
      bmiDescription = 'Normal weight';
    } else if (bmi < 30) {
      bmiDescription = 'Overweight';
    } else {
      bmiDescription = 'Obese';
    }
  
    document.getElementById('bmi-description').innerHTML = bmiDescription;
  
    const bmiLevel = document.getElementById('bmi-level');
    bmiLevel.style.width = bmi + '%';
  }
  