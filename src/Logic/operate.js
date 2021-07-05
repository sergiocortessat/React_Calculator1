import Big from 'big.js';

let result = Infinity;

const Operate = (numberOne = null, numberTwo = null, operation) => {
  const numOne = new Big(numberOne);
  const numTwo = new Big(numberTwo);
  const operations = ['+', '-', 'X', '/', '%'];
  if (operations.includes(operation)) {
    if (operation === '+') {
      result = numOne.plus(numTwo);
    } else if (operation === '-') {
      result = numOne.minus(numTwo);
    } else if (operation === 'X') {
      result = numOne.times(numTwo);
    } else if (operation === '/') {
      try {
        result = numOne.div(numTwo);
      } catch (error) {
        return 'Infinity';
      }
    } else if (operation === '%') {
      if (numberOne) {
        result = new Big(numberOne).div(100);
      } else {
        result = new Big(numberTwo).div(100);
      }
    }
  }
  return result.toString();
};

export default Operate;
