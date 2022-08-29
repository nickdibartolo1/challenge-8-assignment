const employee = require("./employee");

class intern extends employee {
    constructor(property, id, email, school) {

        super(property, id, email);

        this.school = school;
    }
}