const Employee = require('../lib/Employee');


//Employees values test

test('Employees object', () => {
    const employee = new Employee('Alejandro', 3333, 'alejandro.bahsan@gmailcom');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});


test('Employees name', () => {
    const employee = new Employee('Alejandro', 3333, 'alejandro.bahsan@gmailcom');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('Employees ID', () => {
    const employee = new Employee('Alejandro', 3333, 'alejandro.bahsan@gmailcom');

    expect(employee.id).toEqual(expect.any(Number));
});


test('Employees email', () => {
    const employee = new Employee('Alejandro', 3333, 'alejandro.bahsan@gmailcom');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('Employees role', () =>{
    const employee = new Employee('Alejandro', 3333, 'alejandro.bahsan@gmailcom', 'Employee');
    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role.toString()));
});
