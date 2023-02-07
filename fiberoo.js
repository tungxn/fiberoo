function fib() {
  const numArr = [0, 1];
  for (let i = 2; i < 50; i++) {
    numArr.push(numArr[i - 1] + numArr[i - 2]);
  }
  return numArr;
}
console.log(fib());
function numsToStrings(numArr) {
  return _.map(numArr, function (num) { return `${num}`; });
}
console.log(numsToStrings(fib()));
function numEvenNums(numArr) {
  return _.filter(numArr, function (num) { return num % 2 === 0; });
}
console.log(numEvenNums(fib()));
