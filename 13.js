solution(10, [1, 3, 4, 1, 3, 1]);
function solution(k, room_number) {
  var answer = [];
  let num1 = [];
  let num = room_number;
  let temp = num[0];
  let num2 = 0;
  let tempProps = 0;
  num1.push(0);
  for (let i = 0; i < room_number.length; i++) {
    answer.push(temp);
    console.log(num1);
    temp = num[i + 1];
    tempProps = temp - 1;
    num2 = temp - num1.length;
    console.log(temp);
    if (num1[tempProps] === undefined) {
      for (let j = 1; j < num2; j++) {
        num1.push(-1);
      }
      num1.push(0);
    } else if (num1[tempProps] === 0) {
      while (1) {
        if (num1[tempProps] === -1 || num1[tempProps] === undefined) {
          num1[tempProps] = 0;
          break;
        }
        temp++;
        tempProps++;
        console.log(temp);
      }
    } else {
      num1.push(0);
    }
  }
  console.log(answer);
  return answer;
}
