const homework8 = require('./HomeWork-8');
const logSpy = jest.spyOn(global.console, 'log');
// test 1
test('dayOfWeek', () => {
    expect(homework8.dayOfWeek('20.03.1986')).toBe('Четверг');
    expect(homework8.dayOfWeek('26.02.2024')).toBe('Понедельник');
  });
//  test 2
  test('todayMinute', () => {
    const today = new Date(); 
    const minute = today.getMinutes() + today.getHours()*60;
    expect(homework8.todayMinute()).toBe(minute);
    expect(logSpy).toHaveBeenCalledWith(minute);

  });
//   test 3

test('todayMinute', () => {
    let user1 = "20.03.1993";
    let user2 = "13.05.2003";
    homework8.whoOlder(user1, user2)
    expect(logSpy).toHaveBeenCalledWith('Старше user1');

  });