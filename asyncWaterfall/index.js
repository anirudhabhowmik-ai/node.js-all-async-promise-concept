const fs = require('fs'); // helps to read | write | delete the file
const chalk = require('chalk'); //color
const fetch = require('node-fetch');




// // NON-Blocking IO Example


// const promise4 = fetch('https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json').then(res => res.json());

// Promise.all([promise4]).then(res => {
//     var data = JSON.stringify(res);
//     fs.writeFile('country-wize-data.json', data, (err) => {
//         if (err) console.log(err);
//         else console.log(chalk.blue('File Successfully written !!!'));
//     })
// });

const abc1 = () => {
    console.log("India123");
    abc2();
}

const abc2 = () => {
    console.log("India233");
}

abc1();


