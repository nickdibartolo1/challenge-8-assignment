const employee = require("./employee");

class intern extends employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getJob(){
        return "intern";
    }
}

module.exports = intern;