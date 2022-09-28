solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
function solution(n, edge) {
  var answer = 0;
  let num = [1];
  let num1 = [];
  let num2 = edge;
  for (let j = 0; j < n; j++) {
    num1 = [];
    for (let i = 0; i < num2.length; i++) {
      console.log(num1);
      if (num.indexOf(num2[i][0]) !== -1) {
        if (num.indexOf(num2[i][1]) === -1) {
          num1.push(num2[i][1]);
          num2.splice(i, 1);
          i--;
        }
      } else if (num.indexOf(num2[i][1]) !== -1) {
        if (num.indexOf(num2[i][0]) === -1) {
          num1.push(num2[i][0]);
          num2.splice(i, 1);
          i--;
        }
      }
    }
    if (num1.length === 0) {
      break;
    }
    num = [];

    num = num1;
    console.log(num);
  }
  console.log(num.length);
  answer = new Set(num);
  answer = [...answer];
  console.log(answer.length);
  return answer.length;
}
