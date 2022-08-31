const employee = require('./employee');

class engineer extends employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;
    }


    getGithub() {
        return this.github;
    }

    getJob(){
        return "engineer";
    }

}

module.exports = engineer;
