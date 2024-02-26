const homework5 = require('./HomeWork-5');
const logSpy = jest.spyOn(global.console, 'log');

// Test task 1 
test('sumArr', () => {
    const test = [1,2,3,4,5,6,7,8,9,10];
    expect(homework5.sumArr(test)).toBe(55);
    expect(logSpy).toHaveBeenCalledWith(55);
  });

  // Test task 2 
  
test('newArr', () => {
  const test = [1,2,3,4,5,6,7,8,9,10];
  expect(homework5.newArr(test)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });


// Test task 3
test('minMax', () => {
  const minMaxArr = [1,2,3,4,5,6,7,8,9,10];
  homework5.minMax(minMaxArr)
  expect(logSpy).toHaveBeenCalledWith(`Наибольшее значение массива ${Math.max(...minMaxArr)}`);
  expect(logSpy).toHaveBeenCalledWith(`Наименьшее значение массива ${Math.min(...minMaxArr)}`);
  });