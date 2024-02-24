const homework3 = require('./HomeWork-3');
const logSpy = jest.spyOn(global.console, 'log');

// Test task 1 

test('sumInteger', () => {
    expect(homework3.sumInteger(50,100)).toBe(3825);
  });

  //   Test task 2

test('multiSeven', () => {
  const testArr = [
    '7 x 1 = 7',
    '7 x 2 = 14',
    '7 x 3 = 21',
    '7 x 4 = 28',
    '7 x 5 = 35',
    '7 x 6 = 42',
    '7 x 7 = 49',
    '7 x 8 = 56',
    '7 x 9 = 63'
  ];
  homework3.multiSeven();
  expect(logSpy).toHaveBeenCalledTimes(9);
  for (let i = 1; i < 10; i++){
    expect(logSpy).toHaveBeenNthCalledWith(i,testArr[i - 1]);
  }
  });

// Test task 3 

test('averageOf', () => {
    expect(homework3.averageOf(5)).toBe(3);
  });