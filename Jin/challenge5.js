const John = {
  name: "John",
  bills: [124, 48, 268, 180, 42],
  tipCalculator: function() {
    this.tips = [];
    this.finalAmount = [];

    for (let i of this.bills) {
      let percentage;
      if (i < 50) {
        percentage = 0.2;
      } else if (i >= 50 && i < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips.push(percentage * i);
      this.finalAmount.push(i + percentage * i);
    }
  }
};

const Mark = {
  name: "Mark",
  bills: [77, 5, 110, 45],
  tipCalculator: function() {
    this.tips = [];
    this.finalAmount = [];

    for (let i of this.bills) {
      let percentage;
      if (i < 100) {
        percentage = 0.2;
      } else if (i >= 100 && i < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips.push(percentage * i);
      this.finalAmount.push(i + percentage * i);
    }
  }
};

John.tipCalculator();
Mark.tipCalculator();
//console.log(John, Mark);

function calculateAverage(bills) {
  let sum = 0;
  for (let i = 0; i < bills.length; i++) {
    sum += bills[i];
  }
  return sum / bills.length;
}

John.average = calculateAverage(John.tips);
Mark.average = calculateAverage(Mark.tips);
if (John.average < Mark.average) console.log("Mark: " + Mark.average);
else if (John.average > Mark.average) console.log("John: " + John.average);
