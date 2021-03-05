function calculatePower(arr) {
  let timesTwo = [];
  let total = 0;

  arr.forEach((item) => {
    timesTwo.push(item*2);
  });

  timesTwo.reduce((rem, item) => {
     total = rem + item;
     return total;
  },0)

  return total;
}


test= [1,2,3]
console.log(calculatePower(test));
