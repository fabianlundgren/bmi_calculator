function BMICalculator(){
}

BMICalculator.prototype.metric_bmi = function(obj) {
  var weight = obj.weight;
  var height = obj.height;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    obj.bmiValue = parseFloat(finalBmi.toFixed(2));
    setBMIMessage(obj);
  }

  function setBMIMessage (obj) {
    if (obj.bmiValue < 18.5) {
      obj.bmiMessage = "Underweight";
    }
    if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
      obj.bmiMessage = "Normal";
    }
    if (obj.bmiValue > 25 && obj.bmiValue < 30) {
      obj.bmiMessage = "Overweight";
    }
    if (obj.bmiValue > 30) {
      obj.bmiMessage = "Obese";
    }
  }
};

    BMICalculator.prototype.imperial_bmi = function(obj) {
    var pounds = obj.pounds;
    var feet = obj.feet;
    var inches = obj.inches;
    console.log(pounds, feet, inches);
    if (pounds > 0 && feet > 0 && inches > 0) {
       var finalBmi = (pounds * 703) / Math.pow((feet * 12 + inches), 2);
       obj.bmiValue = parseFloat(finalBmi.toFixed(2));
       console.log('obj.bmiValue: ' + obj.bmiValue);
       setBMIMessage(obj);
    }

    function setBMIMessage (obj) {
      if (obj.bmiValue < 18.5) {
        obj.bmiMessage = "Underweight";
      }
      if (obj.bmiValue > 18.5 && obj.bmiValue < 25) {
        obj.bmiMessage = "Normal";
      }
      if (obj.bmiValue > 25 && obj.bmiValue < 30) {
        obj.bmiMessage = "Overweight";
      }
      if (obj.bmiValue > 30) {
        obj.bmiMessage = "Obese";
      }
    }
  };
