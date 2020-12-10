function multiplyNumbersSumTo2020(numbers) {
  let sumMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const remainder = 2020 - numbers[i];
    sumMap[numbers[i]] = remainder;
    if (sumMap[remainder]) {
      console.log("number", numbers[i]);
      console.log("remainder", remainder);
      return numbers[i] * remainder;
    }
  }
}
