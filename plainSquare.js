function solution(w, h) {
  var answer = 1;
  let num = 1;
  let num1 = 0;
  let num2 = w * h;
  if (w === h) {
    answer = num2 - w;
  } else if (w === 1 || h === 1) {
    answer = 0;
  } else {
    for (let i = 2; i <= Math.min(w, h); i++) {
      if (w % i === 0 && h % i === 0) {
        num = i;
      }
      num1 = w + h;
      answer = num2 - num1 + num;
    }
  }
  return answer;
}
