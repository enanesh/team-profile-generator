const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager")
const siteTemplate = require("./src/site-template");
const { Console } = require("console");
const arrayEmployee = [];
const arrayEngineer = [];
const arrayIntern = [];
const arrayManager = [];


//TODO:create an array of questions for user input

const menu = () => {
return inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message:
        "Please select the role of the employee you want to add to your team:",
      choices: [
        "Add an employee",
        "Add an engineer",
        "Add an Manager",
        "Add an intern",
        "Finish team",
      ],
    },
])
    .then(answers => {
        switch (answers.menu) {
            case "Add an employee":
                promptEmployee();
                break;
            case "Add an engineer":
                promptEngineer();
                break;
            case "Add an Manager":
                promptManager();
                break;
            case "Add an intern":
                promptIntern();
                break;
            case "Finish team":

                siteTemplate.buildHTML(arrayEmployee, arrayEngineer, arrayIntern, arrayManager);

                break;
            //default ADD CREATE FILE 
        }
        
    })
    
}


//QUESTIONS FOR EMPLOYEE TEAM MEMBER 

const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "Enter employee name: ",
      name: "employeeName",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please, Input an employee name to continue.";
        }
      }
      },
      {
          type: "input",
          message: "Enter employee ID (e.g. 001): ",
          name: "employeeID",
          validate: (value) => {
              if (value) {
                  return true;
              } else {
                  return "Please, Input an employee ID to continue.";
              }
          }
          
      },
      {
          type: "input",
          message: "Enter employee email (e.g. employee@thiscompany.com): ",
          name: "employeeEmail",
          validate: (value) => {
              if (value) {
                  return true;
              } else {
                  return "Please, Input an employee email to continue.";
              }
          }

      },

  ]).then(answers => {
      console.log(answers);
      const teamEmployee = new Employee(answers.employeeName, answers.employeeID, answers.employeeEmail);
      arrayEmployee.push(teamEmployee);
      
      menu();
  })
}

//QUESTIONS FOR ENGINEER TEAM MEMBER 

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer name: ",
            name: "engineerName",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input an engineer name to continue.";
                }
            }
        },
        {
            type: "input",
            message: "Enter engineer ID (e.g. 001): ",
            name: "engineerID",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input an eengineer ID to continue.";
                }
            }

        },
        {
            type: "input",
            message: "Enter engineer email (e.g. employee@thiscompany.com): ",
            name: "engineerEmail",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input an engineer email to continue.";
                }
            }

        },
        {
            type: "input",
            message: "Enter engineer Github username: ",
            name: "engineerGithub",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input an engineer Github username to continue.";
                }
            }

        },

    ]).then(answers => {
        console.log(answers);
        const teamEngineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail,answers.engineerGithub);
        arrayEngineer.push(teamEngineer);
        menu();
    })
}


const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter intern name: ",
            name: "internName",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input an intern name to continue.";
                }
            }
        },
        {
            type: "input",
            message: "Enter intern ID (e.g. 001): ",
            name: "internID",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input an intern ID to continue.";
                }
            }

        },
        {
            type: "input",
            message: "Enter intern email (e.g. employee@thiscompany.com): ",
            name: "internEmail",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input intern email to continue.";
                }
            }

        },
        {
            type: "input",
            message: "Enter intern school: ",
            name: "internSchool",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input intern schools to continue.";
                }
            }

        },

    ]).then(answers => {
        console.log(answers);
        const teamIntern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
        arrayIntern.push(teamIntern);
        menu();
    })
}

const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter manager name: ",
            name: "managerName",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input a manager name to continue.";
                }
            }
        },
        {
            type: "input",
            message: "Enter manager ID (e.g. 001): ",
            name: "managerID",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input manager ID to continue.";
                }
            }

        },
        {
            type: "input",
            message: "Enter manager email (e.g. manager@thiscompany.com): ",
            name: "managerEmail",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input manager email to continue.";
                }
            }

        },
        {
            type: "input",
            message: "Enter manager office number (e.g. 01): ",
            name: "officeNumber",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                    return "Please, Input manager office number to continue.";
                }
            }

        },

    ]).then(answers => {
        console.log(answers);
        const teamManager = new Manager(answers.managerName, answers.managerID, answers.managerEmail,answers.officeNumber);
        arrayManager.push(teamManager);
        menu();
    })
}


// function init() {
//     inquirer.prompt(questions)
//         .then((data)) => {
//         const 
//     }
    
// }


//FUNCTION TO WRITE FILE 
// function writteToFile(){}




menu();

