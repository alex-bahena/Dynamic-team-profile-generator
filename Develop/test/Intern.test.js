const Employee = require('../lib/Employee')
const Intern = require('../lib/Intern')



describe('Interns object', () => {
    it('Should pass all the tests due the type of data in this comparation', () => {

        const intern = new Intern('Alejandro', 3333, '@alex.com', 'ITESM');

        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    });
});


describe('Verifying Interns dependencies', () =>{
    it('Should pass once we verify Interns role being instance from Employeers constructor', () => {
        const intern = new Intern('Alejandro', 3333, '@alex.com', 'ITESM');
        expect(intern).toBeInstanceOf(Employee);
    });
});


test('Interns role', () =>{
    const intern = new Intern('Alejandro', 3333, '@alex.com', 'intern');
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
});