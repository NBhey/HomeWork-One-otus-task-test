const homework2 = require('./HomeWork-2');
const logSpy = jest.spyOn(global.console, 'log');
// Test task 1 

test('moreLess', () => {
    expect(homework2.moreLess(42,36)).toBe(42);
    expect(logSpy).toHaveBeenCalledWith(42);
  });

//   Test task 2

test('monthSearch', () => {
    expect(homework2.monthSearch(7)).toBe('July');
    expect(logSpy).toHaveBeenCalledWith('July');
    expect(homework2.monthSearch('asa')).toEqual('Введите число от 1-12');
  });

//   Test task 3 

test('check', () => {
    expect(homework2.check(64,58)).toBe('Не вместится');
  });