function multiplyThreeNumbersSumTo2020(numbers) {
  const sortedNum = numbers.sort((a, b) => {
    return a - b;
  });
  let result = [];

  for (i = 0; i < sortedNum.length - 2; i++) {
    //index of left pointer
    let indexL = i + 1;
    // index of right pointer
    let indexR = sortedNum.length - 1;

    while (indexL < indexR) {
      let sum = sortedNum[i] + sortedNum[indexL] + sortedNum[indexR];
      if (sum == 2020) {
        result.push(sortedNum[i], sortedNum[indexL], sortedNum[indexR]);
        indexL++;
        indexR--;
      } else if (sum < 2020) {
        indexL++;
      } else {
        indexR--;
      }
    }
  }
  return result[0] * result[1] * result[2];
}
