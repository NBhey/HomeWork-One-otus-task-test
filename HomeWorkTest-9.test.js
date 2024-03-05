const homework9 = require('./HomeWork-9');
const logSpy = jest.spyOn(global.console, 'log');

// test 1
test('rectangular', () => {
    let a = 3;
    let b = 4;
    let c = 5;
    homework9.rectangular(a,b,c);
    expect(logSpy).toHaveBeenCalledWith('Прямоугольный');
  });

  // test 2
test('lengthAndSquare', () => {
    homework9.lengthAndSquare(4);
    expect(logSpy).toHaveBeenCalledWith('Площадь круга с радиусом 4 равна: 50. Длина окружности равна: 25');
  });

    // test 3
test('quadraticEquation', () => {
    homework9.quadraticEquation(4,4,4);
    homework9.quadraticEquation(5,10,1);
    expect(logSpy).toHaveBeenCalledWith('Нет корней');
    expect(logSpy).toHaveBeenCalledWith('корень x1:-0.10557280900008408, корень х2:-1.894427190999916');
  });