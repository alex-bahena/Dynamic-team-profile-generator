const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./src/htmlTemplate");
const renderManager = require("./src/managerHTML");
const renderEngineer = require("./src/engineerHTML");
const renderIntern = require("./src/internHTML");

// Require lib data.

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let managerArr = [];
let engineerArr = [];
let internArr = [];

function init() {
  // === Manager ===
  const managerInput = [
    {
      type: "input",
      message: "What is your name?",
      name: "name",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please introduce your name");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your id?",
      name: "id",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Please introduce your id number");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please introduce your email");
          return false;
        }
      },
    },
    {
      type: "input",
      message: "Type your office number",
      name: "officeNumber",
      validate: (officeNumberInput) => {
        if (officeNumberInput) {
          return true;
        } else {
          console.log("Please introduce your office number");
          return false;
        }
      },
    },
  ];
  inquirer.prompt(managerInput).then(function (answer) {
    const manager = new Manager(
      answer.name,
      answer.id,
      answer.email,
      answer.officeNumber
    );
    managerArr.push(manager);
    if (managerArr === undefined || managerArr.length == 0) {
      // array does not exist or is empty
    }
  });
}

// Function call to initialize app
init();

function chooseRole() {
  const chooseRole = [
    {
      type: "checkbox",
      message: "What role do you want to add?",
      name: "role",
      choices: ["Engineer", "Intern", "I have done adding team members"],
      validate: (roleInput = () => {
        if (roleInput) {
          return true;
        } else {
          console.log("Please choose one of the options");
          return false;
        }
      }),
    },
  ];

  inquirer.prompt(chooseRole).then(function (roleAnswer) {
    addNewTeamMember(roleAnswer);
  });
}

function addNewTeamMember(roleAnswer) {
  // === Logic - Creating Team Group===

  switch (roleAnswer.role[0]) {
    // === Engineer case ===
    case "Engineer":
      const engineerInput = [
        {
          type: "input",
          message: "What is your name?",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please introduce your name");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is your id?",
          name: "id",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please introduce your id number");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please introduce your email");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is your Github users name?",
          name: "github",
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log("Please introduce your Github user name");
              return false;
            }
          },
        },
      ];
      inquirer.prompt(engineerInput).then(function (engAnswer) {
        const engineer = new Engineer(
          engAnswer.name,
          engAnswer.id,
          engAnswer.email,
          engAnswer.github
        );
        engineerArr.push(engineer);
        chooseRole();
      });
      break;

    // === Intern case ===

    case "Intern":
      const internInput = [
        {
          type: "input",
          message: "What is your name?",
          name: "name",
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please introduce your name");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is your id?",
          name: "id",
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log("Please introduce your id number");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "What is your email?",
          name: "email",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please introduce your email");
              return false;
            }
          },
        },
        {
          type: "input",
          message: "Where are you studying?",
          name: "school",
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log("Please introduce the name of your school");
              return false;
            }
          },
        },
      ];
      inquirer.prompt(internInput).then(function (internAnswer) {
        const intern = new Intern(
          internAnswer.name,
          internAnswer.id,
          internAnswer.email,
          internAnswer.school
        );
        internArr.push(intern);
        chooseRole();
      });
      break;

    // === Exit application ===

    case "I have done adding team members":
      console.log(JSON.stringify(managerArr));
      console.log(JSON.stringify(engineerArr));
      console.log(JSON.stringify(internArr));
      console.log("Your file will be found in   \n./dist/index.html! \n ");
      getHtmlTeam();
      break;
  }
}

const generateManagerHTML = (array) => {
  let managerHTML = "";
  array.forEach((element) => {
    const managerSection = renderManager(element);
    managerHTML += managerSection;
  });
  return managerHTML;
};

const generateEngineerHTML = (array) => {
  let engineerHTML = "";
  array.forEach((element) => {
    const engineerSection = renderEngineer(element);
    engineerHTML += engineerSection;
  });
  return engineerHTML;
};

const generateInternHTML = (array) => {
  let internHTML = "";
  array.forEach((element) => {
    const internSection = renderIntern(element);
    internHTML += internSection;
  });
  return internHTML;
};

const generatedHTML = () => {
  const managersSection = generateManagerHTML(managerArr);
  const engineersSection = generateEngineerHTML(engineerArr);
  const internsSection = generateInternHTML(internArr);
  return generateHTML(managersSection, engineersSection, internsSection);
};

function getHtmlTeam() {
  const html = generatedHTML();
  fs.writeFile("./dist/index.html", html, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Thank you for using this team profile generator.");
    }
  });
}
module.exports = init;
