const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('This will check that engineer is an instance of Employee', () => {
    const engineer = new Engineer('Alejandro', 3333, 'AlejandroBahSan');
    expect(engineer).toBeInstanceOf(Employee);
 
});

test('Engineers object', () => {
    const engineer = new Engineer('Alejandro', 3333, 'AlejandroBahSan');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
 
});

test('Github to be undefined', () => {
    const engineer = new Engineer('Alejandro', 333, undefined);
    expect(engineer.github).toBeUndefined();
});


test('Employees role', () =>{
    const engineer = new Engineer('Alejandro', 3333, 'AlejandroBahSan', 'Engineer');
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
});