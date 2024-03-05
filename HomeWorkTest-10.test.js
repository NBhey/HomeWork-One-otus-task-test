const homework10 = require('./HomeWork-10');
const logSpy = jest.spyOn(global.console, 'log');

// test 1
test('correct date', () => {
    let e = '20.05.1987';
    homework10.inputDate(e)
    expect(logSpy).toHaveBeenCalledWith('Vallid date')
    let d = '201.0521.1987';
    homework10.inputDate(d)
    expect(logSpy).toHaveBeenCalledWith('Invalid date')
  });

  // test 2
test('correct mail', () => {
    let correctMail = 'retrograd@yandex.ru';
    homework10.inputMail(correctMail)
    expect(logSpy).toHaveBeenCalledWith('Vallid email')

  });

    // test 3
test('correct phone number', () => {
    let correctPhone = '+7 999 999-99-99';
    homework10.inputNum(correctPhone)
    expect(logSpy).toHaveBeenCalledWith('Vallid number')

    let unCorrectPhone = '+7 99sa9 999-99-99';
    homework10.inputNum(unCorrectPhone)
    expect(logSpy).toHaveBeenCalledWith('Invalid number')

  });