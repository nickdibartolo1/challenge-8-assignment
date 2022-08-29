const employee = require('./employee');

class engineer extends employee {
    constructor(property, id, email, github) {

        super(property, id, email);

        this.github = github;
    }
}