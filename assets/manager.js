const employee = require("./employee");

class AddedManager extends employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;

    }

    getjob(){
        return "manager";
    }
}

module.exports = AddedManager;