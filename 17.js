solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
function solution(board, moves) {
  let answer = 0;
  let arr = board;
  let temp = 0;
  let num = [];
  for (let i = 0; i < moves.length; i++) {
    let ui = moves[i] - 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][ui] !== 0) {
        temp = arr[j][ui];
        arr[j][ui] = 0;
        console.log(temp);
        break;
      }
    }
    console.log(num);
    if (temp !== 0) {
      if (num[num.length - 1] !== temp) {
        num.push(temp);
      } else {
        num.pop();
        answer += 2;
      }
      temp = 0;
    }
  }
  console.log(num);
  console.log(answer);
  return answer;
}
