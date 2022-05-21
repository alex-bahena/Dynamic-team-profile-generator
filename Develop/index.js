const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./resources/htmlTemplate');
const renderManager = require('./resources/managerHTML');
const renderEngineer = require('./resources/engineerHTML');
const renderIntern = require('./resources/internHTML');


// Require lib data.

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');



let managerArr = [];
let engineerArr = [];
let internArr = [];



function init() {

    // === Manager ===
    const managerInput = [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    console.log(nameInput);
                    return true;
                } else {
                    console.log('Please introduce your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    console.log(idInput);
                    return true;
                } else {
                    console.log('Please introduce your id number');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                    console.log(emailInput);
                    return true;
                } else {
                    console.log('Please introduce your email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Type your office number',
            name: 'officeNumber',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    console.log(officeNumberInput);
                    return true;
                } else {
                    console.log('Please introduce your office number');
                    return false;
                }
            }
        },
    ];
    inquirer.prompt(managerInput)
        .then(function (answer) {
            console.log(answer);
            const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            managerArr.push(manager);
            console.log(manager);

            if (managerArr !== []) {
                chooseRole();
            }
        });

}

// Function call to initialize app
init();

function chooseRole() {

    const chooseRole = [
        {
            type: 'checkbox',
            message: 'What role do you want to add?',
            name: 'role',
            choices: ['Engineer', 'Intern', 'I have done adding team members'],
            validate: roleInput = () => {
                if (roleInput) {
                    console.log(roleInput);
                    return true;
                } else {
                    console.log('Please choose one of the options');
                    return false;
                }
            }
        }
    ];


    inquirer.prompt(chooseRole)
        .then(function (roleAnswer) {
            console.log(roleAnswer + "Here");
            addNewTeamMember(roleAnswer);
        });
}


function addNewTeamMember(roleAnswer) {


    // === Logic - Creating Team Group===

    switch (roleAnswer.role[0]) {

        // === Engineer case ===
        case 'Engineer':
            const engineerInput = [
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                    validate: nameInput => {
                        if (nameInput) {
                            console.log(nameInput);
                            return true;
                        } else {
                            console.log('Please introduce your name');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'What is your id?',
                    name: 'id',
                    validate: idInput => {
                        if (idInput) {
                            console.log(idInput);
                            return true;
                        } else {
                            console.log('Please introduce your id number');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                    validate: emailInput => {
                        if (emailInput) {
                            console.log(emailInput);
                            return true;
                        } else {
                            console.log('Please introduce your email');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'What is your Github users name?',
                    name: 'github',
                    validate: githubInput => {
                        if (githubInput) {
                            console.log(githubInput);
                            return true;
                        } else {
                            console.log('Please introduce your Github user name');
                            return false;
                        }
                    }
                },
            ];
            inquirer.prompt(engineerInput)
                .then(function (engAnswer) {
                    console.log(engAnswer);
                    const engineer = new Engineer(engAnswer.name, engAnswer.id, engAnswer.email, engAnswer.github);
                    engineerArr.push(engineer);
                    console.log(engineerArr);
                    chooseRole();
                });
            break;

        // === Intern case ===

        case 'Intern':

            const internInput = [
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name',
                    validate: nameInput => {
                        if (nameInput) {
                            console.log(nameInput);
                            return true;
                        } else {
                            console.log('Please introduce your name');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'What is your id?',
                    name: 'id',
                    validate: idInput => {
                        if (idInput) {
                            console.log(idInput);
                            return true;
                        } else {
                            console.log('Please introduce your id number');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'What is your email?',
                    name: 'email',
                    validate: emailInput => {
                        if (emailInput) {
                            console.log(emailInput);
                            return true;
                        } else {
                            console.log('Please introduce your email');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    message: 'What school do you attend?',
                    name: 'school',
                    validate: schoolInput => {
                        if (schoolInput) {
                            console.log(schoolInput);
                            return true;
                        } else {
                            console.log('Please introduce your schools name');
                            return false;
                        }
                    }
                },
            ];
            inquirer.prompt(internInput)
                .then(function (internAnswer) {
                    console.log(internAnswer);
                    const intern = new Intern(internAnswer.name, internAnswer.id, internAnswer.email, internAnswer.school);
                    internArr.push(intern);
                    console.log(internArr);
                    chooseRole();
                });
            break;


        // === Exit application ===

        case 'I have done adding team members':
            console.log(JSON.stringify(managerArr));
            console.log(JSON.stringify(engineerArr));
            console.log(JSON.stringify(internArr));
            console.log('Your file will be found in   \n./dist/index.html! \n ');
            getHtmlTeam();
            break;
    }

}

const generateManagerHTML = (array) => {
    let managerHTML = '';
    array.forEach(element => {
        const managerSection = renderManager(element);
        managerHTML += managerSection;
    });
    return managerHTML;
}


const generateEngineerHTML = (array) => {
    let engineerHTML = '';
    array.forEach(element => {
        const engineerSection = renderEngineer(element);
        engineerHTML += engineerSection;
    });
    return engineerHTML;
}

const generateInternHTML = (array) => {
    let internHTML = '';
    array.forEach(element => {
        const internSection = renderIntern(element);
        internHTML += internSection;
    });
    return internHTML;
}


const generatedHTML = () => {
    const managersSection = generateManagerHTML(managerArr);
    const engineersSection = generateEngineerHTML(engineerArr);
    const internsSection = generateInternHTML(internArr);
    return generateHTML(managersSection, engineersSection, internsSection);
}


function getHtmlTeam() {
    const html = generatedHTML();
    fs.writeFile('./output/index.html', html, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("Thank you for using this team profile generator.")
        }
    })
}
module.exports = init;