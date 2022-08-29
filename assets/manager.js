const employee = rewqire("./employee");

class manager extends employee {
    constructor(property, id, email, officeNumber) {

        super(property, id, email);

        this.officeNumber = officeNumber;

    }
}