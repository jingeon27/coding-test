function solution(n, s) {
  let answer = [];
  if (s === 1 || s === n || s < n) {
    answer.push(-1);
  } else {
    let num = 0;
    let so = 0;
    let no = 0;
    num = s % n;
    so = s - num;
    no = so / n;
    for (let i = 0; i < n - num; i++) {
      answer.push(no);
    }
    if (num > 0) {
      for (let j = 0; j < num; j++) {
        answer.push(no + 1);
      }
    }
  }
  return answer;
}
