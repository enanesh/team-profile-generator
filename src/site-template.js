// CARDS TEMPLATE
const myTeam = []
const templateTeam = [];

const buildHTML = (a, b, c, d) => {
  const HTMLEngineers = [];


}


const templateEmployee = (teamEmployee) => {
    console.log(teamEmployee);

    let cardEmployee =
        ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamEmployee.employeeName}</p>
      
      <h4><i class="fa-solid fa-mug-hot"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamEmployee.employeeID}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamEmployee.employeeEmail}">${teamEmployee.employeeEmail}</a></span></li>

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
      <p>${teamEngineer.engineerName}</p>
      
      <h4><i class="fa-solid fa-briefcase"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamEngineer.engineerID}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamEngineer.engineerEmail}">${teamEngineer.engineerEmail}</a></span></li>
      <li class="list-group-item"> Github Username: <a target="_blank" href="https://github.com/${teamEngineer.engineerGithub}">${teamEngineer.engineerGithub}</a></li>

    </ul>

    </div>
    </div> `;
    templateTeam.push(cardEngineer);


}

const templateIntern = (teamIntern) => {
    console.log(teamIntern);

    let cardIntern =
        ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamIntern.internName}</p>
      
      <h4><i class="fa-solid fa-user-graduate"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamIntern.internID}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamIntern.internEmail}">${teamIntern.internEmail}</a></span></li>
     <li class="p-3 text-xl">School: ${teamIntern.internSchool}</li>
    </ul>

    </div>
    </div> `;
    templateTeam.push(cardIntern);


}


const templateManager = (teamManager) => {
    console.log(teamManager);

    let cardManager =
        ` <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-blue-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-800 w-80 bg-gray-100">

    <div class="mb-2 bg-blue-500 text-2xl p-4 text-center rounded-lg font-bold tracking-tight text-white dark:text-white">
      <p>${teamManager.managerName}</p>
      
      <h4><i class="fa-solid fa-user-graduate"></i> Employee</h4>
    </div>

     <div>

    <ul class="font-normal text-gray-700 dark:text-gray-400 border-gray-200  p-7">
      <li class="p-3 text-xl">ID: ${teamManager.managerID}</li>
      <li class="p-3 text-xl">Email:<span id="email"><a href="mailto:${teamManager.managerEmail}">${teamManager.managerEmail}</a></span></li>
     <li class="p-3 text-xl">School: ${teamManager.managerOffice}</li>
    </ul>

    </div>
    </div> `;
    templateTeam.push(cardManager);


}




