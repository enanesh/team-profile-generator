# team-profile-generator

  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This repo houses the assets used to build the command-line application team-profile-generator.Developed using Js, and inquirer library, we build a Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person on a nicely formated roaster .


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demo Video](#demo-video)
- [Credits](#credits)
- [Tests](#tests)
- [Technology Used](#technology-used)
- [License](#license)

## Installation


In order of being able to run this application you'll need

## Step 1:

```sh
git clone https://github.com/enanesh/team-profile-generator.git

git status 
```

## Step 2:
Once you cloned the repo yuo are ready to make any changes.



To install this application, clone the code into your terminal for the respective repository. Then, install npm by entering the command ```npm init```  into the terminal. Inquirer must then be installed by entering ```npm install inquirer```. Finally, the program can then be run by entering ```node develop/index.js``` into the command line, and answering each question appropriately.

```JavaScript
npm install inquirer

var inquirer = require('inquirer');
  inquirer
    .prompt([
      /* Pass your questions in here */
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
```
 
## Usage
Inquirer is easiest to use when installed with npm:  ``` npm install inquirer ```. Then you can load the module into your code with a require call: ``` const inquirer = require(‘inquirer’); ```
1. Enter management information
2. You will be redirected to a menu, where you can choose to add an engineer, add an intern, or end the application
3. If you choose to add an engineer or an intern, you will be reprompted to the menu until you choose to end the application
4. Once you end the application, your software team will be generated in an HTML file



## Demo Video 



https://user-images.githubusercontent.com/111031708/206061303-44d25c6d-266e-4572-a340-89d7bc530c4b.mp4


### Screenshot 1

 ![Screenshot](https://github.com/enanesh/team-profile-generator/blob/main/Assets/Screenshot%202022-12-06%20at%205.02.05%20PM.png?raw=true)



## Credits

Node.js : https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/

Inquirer: https://www.npmjs.com/package/inquirer/v/8.2.4?activeTab=readme


## Tests
![GitHub license](https://img.shields.io/badge/test-100%25-success)

## Technology Used
- HTML
- CSS
- JavaScript
- Node.js
- Inquirer
- Path
- Jest


## License
This application is rendered under MIT


  


  
