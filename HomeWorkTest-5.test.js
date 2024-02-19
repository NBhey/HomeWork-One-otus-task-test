const homework5 = require('./HomeWork-5');

// Test task 1 
test('sumArr', () => {
    expect(homework5.sumArr([1,2,3,4,5,6,7,8,9,10])).toBe(55);
  });

  // Test task 2 
  
test('Create new Arr', () => {
    expect(homework5.newArr([1,2,3,4,5,6,7,8,9,10])).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });


