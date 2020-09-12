const async = require('async');
const chalk = require('chalk');


const arr = [2,2,1,3,3,0,4,5,5,6]; //I want n function which will gives me final result of sorted & distinct array,
arr = [0,1,2,3,4,5]; 



// **  Rule  **
function myFirstFunction(callback) { //array sort
  // callback(null, 'Task 1', 'Task 2');
  callback('ERROR', null);
}
function mySecondFunction(arg1, arg2, callback) { //Eleminate the duplicates from the array
    // arg1 now equals 'Task 1' and arg2 now equals 'Task 2'
    let arg3 = arg1 + ' and ' + arg2;
    callback(null, arg3);
}
function myLastFunction(arg3, callback) {
    // arg1 now equals 'Task1 and Task2'
    arg3 += ' completed';
    callback(null, arg3);
}

async.waterfall([
    myFirstFunction,
    mySecondFunction,
    myLastFunction,
], function(err, result) {
// result now equals 'Task1 and Task2 completed'
    if(err) {
      console.error(chalk.redBright(err))
    } else {
      console.log(chalk.bgYellowBright(result));
    }
});

// ** Drawbacks **



