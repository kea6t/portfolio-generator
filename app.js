const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name fool?'
        }
    ])
    .then(answers => console.log(answers));

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);



// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw new Error(err);

//     console.log('Portfolio Complete! Check out index.html to see the output');
// });

