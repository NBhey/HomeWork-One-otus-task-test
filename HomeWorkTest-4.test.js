const homework4 = require('./HomeWork-4');
const logSpy = jest.spyOn(global.console, 'log');

it('new object', () => {
homework4.newObject('John', 22, 'admin')
expect(logSpy).toHaveBeenCalledTimes(1);
expect(logSpy).toHaveBeenCalledWith('John', 22, 'admin');
});


