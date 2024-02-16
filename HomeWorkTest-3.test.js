const homework3 = require('./HomeWork-3');

// Test task 1 

test('sumInteger', () => {
    expect(homework3.sumInteger(50,100)).toBe(3825);
  });

  //   Test task 2

test('multiSeven', () => {
    expect(homework3.multiSeven(7)).toBe('7 * 7 = 49');
  });

// Test task 3 

test('averageOf', () => {
    expect(homework3.averageOf(5)).toBe(3);
  });