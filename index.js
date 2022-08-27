const fs = require('fs');
const inquirer = require('inquirer');



const workerArr = [];

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
}