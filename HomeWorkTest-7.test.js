const homework7 = require('./HomeWork-7');


describe('create list', () => {
  let element;
  let input;
  let button;

  beforeEach(() => {
    element = document.createElement('div');
    homework7.userList(element);
    input = element.querySelector('input');
    button = element.querySelector('button');
  });

  function getPeragraphs() {
    let checkArr = []
    for (let i = 1;  i < 4; i++) {
      const el = document.createElement('p')
      el.innerText = `Параграф ${i}`;
      checkArr.push(el);
      element.append(el);
     
  }
  }

  test('should create initial markup', () => {
    const list = element.querySelectorAll('p');

    expect(input).toBeTruthy();
    expect(input.value).toEqual('');

    expect(button).toBeTruthy();
    expect(button.innerHTML).toBe("Добавить параграф");
    expect(button.hidden).toBe(true);

    expect(list).toBeTruthy();
    expect(list.length).toBe(3);
  });
  
  test('should hide button on input empty', () => {
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
    expect(input.value).toEqual('');
    expect(button.hidden).toBe(true);
});

  test('should append list on button click', () => {  
  input.value = 'test';
  input.dispatchEvent(new Event('input'));
  expect(input.value).toEqual('test');
  expect(button.hidden).toBe(false);
});
  

});