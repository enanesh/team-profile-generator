// CARDS TEMPLATE

const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const templateTeam = [];

/**
 * 
 * @param {List<Employee>} employees 
 * @param {List<Engineer>} engineers 
 * @param {List<Intern>} interns 
 * @param {List<Manager>} managers 
 */
const buildHTML = (employees, engineers, interns, managers) => {
  let htmlEmployees = "";

  for (var i = 0; i < employees.length; i++) {
    htmlEmployees = htmlEmployees + templateEmployee(employees[i])
  };

 for(var i = 0; i < engineers.length; i++) {
    htmlEmployees = htmlEmployees + templateEngineer(engineers[i])
  }

  for (var i = 0; i < interns.length; i++) {
    htmlEmployees = htmlEmployees + templateIntern(interns[i])
  }
  for (var i = 0; i < managers.length; i++) {
    htmlEmployees = htmlEmployees + templateManager(managers[i])
  }
  // console.log(htmlEmployees);

  let finalHtml = `< !DOCTYPE html >
    <html lang="en">

      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Roaster</title>
        <script src="https://kit.fontawesome.com/b47ac2dc27.js" crossorigin="anonymous"></script>

      </head>

      <body>

        <header>
          <div class="text-center bg-red-500 text-white py-6 px-6">
            <h1 class="text-5xl font-bold mt-0 mb-6">My Team</h1>
          </div>
        </header>


        <div class="container container mx-auto py-10 px-10">
        
        
         ${htmlEmployees}

        </div>


 <script src="https://cdn.tailwindcss.com"></script>    
</body>

</html>
        

        `;
  console.log(finalHtml)
  return finalHtml;


}


/**
 * method that returns a template for employee
 * @param {Employee} teamEmployee 
 * @returns string
 */
const templateEmployee = (teamEmployee) => {
    console.log(teamEmployee);

  let cardEmployee =
    ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamEmployee.getName()}</p>
      
      <h4><i class="fa-solid fa-mug-hot"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamEmployee.getId()}</li>
      <li class="p-3 text-xl">Email:<span id="email">
      <a href="mailto:${teamEmployee.getEmail()}">${teamEmployee.getEmail()}</a>
      </span>
      </li>

    </ul>

    </div>
    </div> `;
  return cardEmployee;


}


const templateEngineer = (teamEngineer) => {
    console.log(teamEngineer);

    let cardEngineer =
        ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamEngineer.getName()}</p>
      
      <h4><i class="fa-solid fa-briefcase"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamEngineer.getName()}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamEngineer.getEmail()}">${teamEngineer.getEmail()}</a></span></li>
      <li class="list-group-item"> Github Username: <a target="_blank" href="https://github.com/${teamEngineer.getGithub()}">${teamEngineer.getGithub()}</a></li>

    </ul>

    </div>
    </div> `;
  return cardEngineer;


}

const templateIntern = (teamIntern) => {
    console.log(teamIntern);

    let cardIntern =
        ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamIntern.getName()}</p>
      
      <h4><i class="fa-solid fa-user-graduate"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamIntern.getId()}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamIntern.getEmail}">${teamIntern.getEmail}</a></span></li>
     <li class="p-3 text-xl">School: ${teamIntern.getSchool}</li>
    </ul>

    </div>
    </div> `;
    return cardIntern;


}


const templateManager = (teamManager) => {
    console.log(teamManager);

    let cardManager =
        ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamManager.getName()}</p>
      
      <h4><i class="fa-solid fa-user-graduate"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamManager.getId()}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamManager.getEmail()}">${teamManager.getEmail()}</a></span></li>
     <li class="p-3 text-xl">School: ${teamManager.getEmail()}</li>
    </ul>

    </div>
    </div> `;
    return cardManager;


}




module.exports = { buildHTML };