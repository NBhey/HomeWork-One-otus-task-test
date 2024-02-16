const homework2 = require('./HomeWork-2');

// Test task 1 

test('moreLess', () => {
    expect(homework2.moreLess(42,36)).toBe(42);
  });

//   Test task 2

test('monthSearch', () => {
    expect(homework2.monthSearch(7)).toBe('July');
  });

//   Test task 3 

test('check', () => {
    expect(homework2.check(64,58)).toBe(false);
  });