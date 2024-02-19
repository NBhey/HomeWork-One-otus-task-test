const homework6 = require('./HomeWork-6');

// Test task 1 
test('diff', () => {
    expect(homework6.diff(3,1)).toBe(2);
  });


// Test task 2 
test('isWord', () => {
    expect(homework6.isWord('hello JavaScript')).toBe(false);
  });

  // Test task 3
test('pow', () => {
    expect(homework6.pow(3,3)).toBe(27);
  });