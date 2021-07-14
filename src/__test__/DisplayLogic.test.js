import '@testing-library/jest-dom/extend-expect';
import Logic from '../Logic/DisplayLogic';

const calculatorObj1 = { total: 15, next: null, operation: '' };
const calculatorObj2 = { total: 15, next: 0, operation: '+/-' };
const calculatorObj3 = { total: 10, next: 15, operation: '%' };
const calculatorObj4 = { total: 10, next: 15, operation: '+' };
const calculatorObj5 = { total: 10, next: 20, operation: '-' };
const calculatorObj6 = { total: 5, next: 30, operation: '*' };
const calculatorObj7 = { total: 5, next: 25, operation: '/' };
const calculatorObj8 = { total: 0, next: 25, operation: '+/-' };

describe('Logic', () => {
  test('should return the correct result 1', () => {
    const result = Logic(calculatorObj1);
    expect(result).toBe('15');
  });
  test('should return the correct result 2', () => {
    const result = Logic(calculatorObj2);
    expect(result).toBe(0);
  });
  test('should return the correct result 3', () => {
    const result = Logic(calculatorObj3);
    expect(result).toBe(10);
  });
  test('should return the correct result 4', () => {
    const result = Logic(calculatorObj4);
    expect(result).toBe('10+15');
  });
  test('should return the correct result 5', () => {
    const result = Logic(calculatorObj5);
    expect(result).toBe('10-20');
  });
  test('should return the correct result 6', () => {
    const result = Logic(calculatorObj6);
    expect(result).toBe('5*30');
  });
  test('should return the correct result 7', () => {
    const result = Logic(calculatorObj7);
    expect(result).toBe('5/25');
  });
  test('should return the correct result 8', () => {
    const result = Logic(calculatorObj8);
    expect(result).toBe(25);
  });
});
