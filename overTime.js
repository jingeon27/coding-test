function solution(n, works) {
  var answer = 0;
  let num = works;
  let num1 = num.length - 1;
  let nn = n;
  let total = works.reduce(function add(num, num1) {
    return num + num1;
  }, 0);
  if (total < n) {
    answer = 0;
  } else {
    num.sort(function (a, b) {
      return a - b;
    });
    while (1) {
      num[num1]--;
      nn--;
      if (nn === 0) {
        break;
      }
      for (j = num1; j > 0; j--) {
        let k = j - 1;
        if (num[j] >= num[k]) {
          break;
        }
        num[k]--;
        num[j]++;
      }
    }
    for (let i = 0; i < num.length; i++) {
      answer = num[i] * num[i] + answer;
    }
  }
  return answer;
}
