const homework4 = require('./HomeWork-4');

// Test task 1 

test('ageUser', () => {
    expect(homework4.ageUser(22)).toStrictEqual({name: 'John', age: 22});
  });

// Test task 2 

test('copyUser', () => {
    expect(homework4.copyUser('admin')).toStrictEqual({name: 'John', age: 22, role: 'admin'});
  });

