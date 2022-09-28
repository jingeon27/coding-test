solution([
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0],
]);
function solution(board) {
  var answer = 0;
  let arr = board;
  let num = 0;
  result = 10;
  arr[board.length][board[0].length] = 10;
  console.log(board.length);
  // for(let i = 0; i< board.length; i++){
  //     for(let j = 0; j <= board[0].length; j++){
  //         num += 100;
  //         if(board[i][j] === 1){
  //             while(1){
  //                 i++;
  //             }
  //         }
  //     }
  // }
  return answer;
}
function goRight(i, j, k) {}
