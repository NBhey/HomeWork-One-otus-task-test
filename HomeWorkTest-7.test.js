const homework7 = require('./HomeWork-7');


describe('create list', () => {
  let element;
  let input;
  let btn;

 function getPeragraphs() {
    return [...element.querySelectorAll('p')].map((el) => el.innerText);
  }



  beforeEach(() => {
    element = document.createElement('div');
    homework7.userList(element);
    input = element.querySelector('input');
    btn = element.querySelector('button');
  });

  test('верстаем макет', () => {
    const list = element.querySelectorAll('p');

    expect(input).toBeTruthy();
    expect(input.value).toEqual('');

    expect(btn).toBeTruthy();
    expect(btn.innerText).toBe("Добавить параграф");
    expect(btn.hidden).toBe(true);

    expect(list).toBeTruthy();
    expect(list.length).toBe(3);
  });
  
  test('скрываем кнопку', () => {
    expect(input).toBeTruthy();
    expect(btn).toBeTruthy();

    expect(input.value).toEqual('');
    expect(btn.hidden).toBe(true);

    input.value = 'test';
    expect(input.value).toEqual('test');
    input.dispatchEvent(new Event('input'));
    expect(btn.hidden).toBe(false);
});

  test('добавляем список', () => {  
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    expect(input.value).toEqual('test');
    expect(btn.hidden).toBe(false);
    
    btn.click();
    expect(input.value).toEqual('');

    expect(getPeragraphs()).toEqual(expect.arrayContaining(['Параграф 1', 'Параграф 2', 'Параграф 3','test']));
    expect(getPeragraphs()).toEqual(['Параграф 1', 'Параграф 2', 'Параграф 3','test']);
});

  test ('проверяем, что в списке не больше пяти пунктов', () => {
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    btn.click();
    input.value = 'test2';
    input.dispatchEvent(new Event('input'));
    btn.click();
    input.value = 'test3';
    input.dispatchEvent(new Event('input'));
    btn.click();
    expect(getPeragraphs()).toEqual(expect.arrayContaining(['Параграф 2', 'Параграф 3', 'test', 'test2', 'test3']));
    expect(getPeragraphs()).toEqual(['Параграф 2', 'Параграф 3','test','test2','test3']);
  });

});