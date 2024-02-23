const homework = require('./HomeWork-1');
const logSpy = jest.spyOn(global.console, 'log');
describe('Test sum', () => {
   test('sum', () => {
     expect(homework.sum(4,5)).toBe(9);
     expect(logSpy).toHaveBeenCalledWith(9);
   });
   test('the length of the connected strings', () => {
    expect(homework.lengthWord('cat','dog')).toBe(6);
    expect(logSpy).toHaveBeenCalledWith(6);
 });
 test('from a three-digit number to one', () => {
  expect(homework.transformation(333)).toBe(9);
  expect(logSpy).toHaveBeenCalledWith(9);
});
});
