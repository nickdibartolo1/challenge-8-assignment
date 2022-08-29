const fs = require('fs');
const inquirer = require('inquirer');
const employee = require("./employee")
const engineer = require("./engineer")
const intern = require("./intern")
const manager = require("./manager")



const workerArr = [];

//managers object info
const addManager = () => {
    return inquirer.prompt([
        {
            property: "name",
            type: "input",
            question: "What is the team managers name?:",
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
            property: "id",
            type: "input",
            question: "What is the team managers ID number?:",
            validate: nameEntry => {
                if (nameEntry === isNaN) {
                    console.log("Enter the team managers ID number.")
                    return false;
                } else {
                    return true;
                }
            }

        },
        {
            property: "email",
            type: "input",
            question: "What is the team managers email address?:",
            // validate: nameEntry => {
            //     if (nameEntry === email){

            //     }
            // }
        },
        {
            property: "officeNumber",
            type: "input",
            question: "What is the team managers office number?:",
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
        const {property, id, email, officeNumber} = managerEntry;
        const addedManager = new AddedManager (property, id, email, officeNumber);
        workerArr.push(manager);
        console.log(manager);
    })
};


//employees object info
const addEmployee = () => {
    console.log('ADDING TEAM EMPLOYEES');
    return inquirer.prompt([
        {
            property: "job",
            type: "list",
            question: "What is the job of the employee?:",
            options: ["Engineer", "Intern"]
        },
        {
            property: "name",
            type: "input",
            question: "What is the employees name?:",
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
            property: "id",
            type: "input",
            question: "What is the employees ID number?:",
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
            property: "email",
            type: "input",
            question: "What is the employees email address?:",
            //
        },
        {
            property: "email",
            type: "input",
            question: "What is the employees github username?:",
            //

        },
        {
            property: "github",
           type: "input",
           message: "Enter the engineer employee's github username.",

           //
        },
        {
            property: "school",
            type: "input",
            message: "Enter the name of the intern's school.",
            //
        },
        {
            property: "empConfirmation",
            type: "confirm",
            message: "Are there any more employees you would like to add?",
            default: false
        }
    ])
    //employee data variable storing object data
    .then (empData => {
        let empData = { property, id, email, officeNumber, job, github, school, empConfirmation};

        if(job === "Engineer"){
            employee = new EngineerEmp (property, id, github, email);
            console.log(employee);
            
        } else if (job === "Intern"){
            employee = new InternEmp (property, id, school, email);
            console.log(employee);

        }
    })
}


addManager();