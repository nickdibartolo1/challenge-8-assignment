const fs = require('fs');
const inquirer = require('inquirer');

const genHTML = require('./genHTML');

// const AddedEmployee = require('./assets/employee')
const AddedEngineer = require("./assets/engineer")
const AddedIntern = require("./assets/intern")
const AddedManager = require("./assets/manager")

const workerArr = [];


const createManager = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team managers name?:",
                validate: (nameEntry) => {
                    if (nameEntry) {
                        return true;
                    } else {
                        console.log("A name is needed for this entry")
                        return false
                    }
                }

            },
            {
                type: "input",
                name: "id",
                message: "What is the team managers ID number?:",
                validate: (nameEntry) => {
                    if (nameEntry === isNaN) {
                        console.log("Enter the team managers ID number.")
                        return false;
                    } else {
                        return true;
                    }
                }

            },
            {
                type: "input",
                name: "email",
                message: "What is the team managers email address?:",
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team managers office number?:",
                validate: nameEntry => {
                    if (nameEntry === isNaN) {
                        console.log("Enter the team managers office number.")
                        return false;
                    } else {
                        return true;
                    }
                }
            }

        ])
        //function for putting object input data into a const then pushing to workerArr array.
        .then(managerEntry => {
            const { name, id, email, officeNumber } = managerEntry;
            const addedManager = new AddedManager(name, id, email, officeNumber);

            workerArr.push(addedManager);
            console.log(addedManager);
            createEmployee();
        })
};


//employees object info
const createEmployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "job",
                message: "What is the job of the employee?:",
                options: ["Engineer", "Intern"]
            },
            {
                type: "input",
                property: "name",
                name: "What is the employees name?:",
                validate: nameEntry => {
                    if (nameEntry) {
                        return true;
                    } else {
                        console.log("A name is needed for this entry")
                        return false
                    }
                }

            },
            {
                type: "input",
                name: "id",
                message: "What is the employees ID number?:",
                validate: nameEntry => {
                    if (nameEntry === isNaN) {
                        console.log("Enter the employees ID number.")
                        return false;
                    } else {
                        return true;
                    }
                }

            },
            {
                type: "input",
                name: "email",
                message: "What is the employees email address?:",
                
            },
            {
                type: "input",
                name: "email",
                message: "What is the employees github username?:"

            },
            {
                type: "input",
                name: "github",
                message: "Enter the engineer employee's github username.",
            },
            {
                type: "input",
                name: "school",
                message: "Enter the name of the intern's school.",
            },
            {
                type: "confirm",
                name: "empConfirmation",
                message: "Are there any more employees you would like to add?",
                default: false
            }
        ])
        //employee data variable storing object data
        .then(empData => {
            let { name, id, email, job, github, school, empConfirmation } = empData;

            if (job === "Engineer") {
                employeeNew = new AddedEngineer(name, id, github, email);
                console.log(employeeNew);

            } else if (job === "Intern") {
                employeeNew = new AddedIntern(name, id, school, email);
                console.log(employeeNew);

            }

            workerArr.push(employeeNew)
            if (empConfirmation) {
                return createEmployee(workerArr);
            } else {
                return workerArr;
            }
        })
}

const createFile = data => {
    fs.createFile('./index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("HTML file successfully generated! New work team created.")
        }
    })
}

createManager()
    .then(createEmployee)
    .then(workerArr => {
        return genHTML(workerArr)
    })
    .then(HTMLFile => {

        return createFile(HTMLFile)
    });
