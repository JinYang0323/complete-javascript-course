const bills = [124, 48, 268];
const tips = [];
const finalAmount = [];

function tipCalculator(bill) {
  if (bill < 50) {
    return (bill * 20) / 100;
  } else if (bill < 200) {
    return (bill * 15) / 100;
  } else {
    return (bill * 10) / 100;
  }
}

for (let i of bills) {
  tips.push(tipCalculator(i));
  finalAmount.push(i + tips[tips.length - 1]);
}

console.log(tips);
console.log(finalAmount);
