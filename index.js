const fs = require('fs');
const inquirer = require('inquirer');



const workerArr = [];

//managers object info
const addManager = () => {
    return inquirer.prompt([
        {
            name: "name",
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
            name: "id",
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
            name: "email",
            type: "input",
            question: "What is the team managers email address?:",
            // validate: nameEntry => {
            //     if (nameEntry === email){

            //     }
            // }
        },
        {
            name: "officeNumber",
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
    .then(managerEntry => {
        const {name, id, email, officeNumber} = managerEntry;
        const addedManager = new addedManager (name, id, email, officeNumber);
        workerArr.push(manager);
        console.log(manager);
    })
};


//employees object info
const addEmployee = () => {
    return inquirer.prompt([
        {
            name: "job",
            type: "list",
            question: "What is the job of the employee?:",
            options: ["Engineer", "Intern"]
        },
        {
            name: "name",
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
            name: "id",
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
            name: "id",
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
            name: "email",
            type: "input",
            question: "What is the employees email address?:",
            //
        },
        {

        }
    ])
}