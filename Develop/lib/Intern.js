const RequireEmployee = require('./Employee');

class Intern extends RequireEmployee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = this.getRole();

    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;