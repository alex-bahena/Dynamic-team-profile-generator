const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Managers object', () => {
    it('Should pass all the tests due the type of data in this comparation', () => {

        const manager = new Manager('Alejandro', 3333, '@alex.com', 9913333133);

        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
});


describe('Verifying managers dependencies', () =>{
    it('Should pass once we verify managers role being instance from Employeers constructor', () => {
        const manager = new Manager('Alejandro', 3333, '@alex.com', 9913333133);
        expect(manager).toBeInstanceOf(Employee);
    });
});


test('Managers role', () =>{
    const manager = new Manager('Alejandro', 3333, '@alex.com', 'Manager');
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
});