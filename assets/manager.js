const employee = rewqire("./employee");

class manager extends employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber;

    }
}