class AddedEmployee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getProperty(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getJob(){
        return "Employee";
    }
}
 
module.exports = AddedEmployee
// console.log(employee)