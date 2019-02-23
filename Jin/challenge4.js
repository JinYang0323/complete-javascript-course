const Mark = {
  fullName: "Mark A",
  mass: 80,
  height: 192,
  calBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

const John = {
  fullName: "John B",
  mass: 70,
  height: 182,
  calBMI: function() {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  }
};

if (Mark.calBMI() > John.calBMI()) console.log(Mark);
else if (Mark.BMI < John.BMI) console.log(John);
else console.log("this is a tie");
