const async = require('async');
const chalk = require('chalk');


const arr = [2,2,1,3,3,0,4,5,5,6]; //I want n function which will gives me final result of sorted & distinct array,
// arr = [0,1,2,3,4,5]; 



// **  Rule  **
function myFirstFunction(callback) { //array sort
  console.log(chalk.greenBright('I am first function'));
  // try catch
  // Promise
  callback(null, 'Task 1', 'Task 2'); //success message 
  //  callback('This is Error', null);
}
function mySecondFunction(arg1, arg2, callback) { //Eleminate the duplicates from the array
    // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
    console.log(chalk.greenBright('I am second function'));
    let arg3 = arg1 + ' and ' + arg2;
    callback(null, arg3);
}
// function myLastFunction(arg3, callback) {
//     console.log(chalk.greenBright('I am last function'));
//     arg3 += ' completed';
//     callback(null, arg3);
// }

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    // myLastFunction,
], function(err, result) {
    if(err) {
      console.error(chalk.redBright(err))
    } else {
      console.log(chalk.bgYellowBright(result));
    }
});

// ** Drawbacks **



