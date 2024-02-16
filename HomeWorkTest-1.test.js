const homework = require('./HomeWork-1');

//  Test task 1

 test('sum', () => {
   expect(homework.sum(4,5)).toBe(9);
 });

//  Test task 2

 test('the length of the connected strings', () => {
    expect(homework.lengthWord('cat','dog')).toBe(6);;
 });

 // Test task 3

 test('from a three-digit number to one', () => {
    expect(homework.transformation(333)).toBe(9);
 });