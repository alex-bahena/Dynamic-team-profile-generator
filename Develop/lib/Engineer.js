const RequireEmployee = require('./Employee');

class Engineer extends RequireEmployee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = this.getRole();

    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;