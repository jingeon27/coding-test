solution([
  "I 4",
  "I 3",
  "I 2",
  "I 1",
  "D 1",
  "D 1",
  "D -1",
  "D -1",
  "I 5",
  "I 6",
]);
function solution(operations) {
  var answer = [];
  let arr = [];
  let temp = 0;
  let num = 0;
  let arr2 = operations;
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "D 1") {
      console.log(arr);
      arr.pop();
    } else if (arr2[i] === "D -1") {
      console.log(arr);
      arr.shift();
    } else {
      console.log(arr2[i]);
      arr.unshift(arr2[i].replace("I ", ""));
      console.log(arr);
      arr.sort(function (a, b) {
        return a - b;
      });
      console.log(arr);
      temp = 1;
    }
  }
  if (arr.length === 0) {
    answer = [0, 0];
  } else {
    answer = [Math.max(...arr), Math.min(...arr)];
  }
  console.log(answer);
  return answer;
}
