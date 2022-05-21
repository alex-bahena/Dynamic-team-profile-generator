const RequireEmployee = require('./Employee');
const indexJs = require('../index');


class Manager extends RequireEmployee {

    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = this.getRole();

    }

    getRole() {
        return 'Manager';
    }
}



module.exports = Manager;