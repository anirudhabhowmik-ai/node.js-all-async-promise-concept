

// Async parallel
const async = require('async');
const chalk = require('chalk');

// var stack = [];

// var functionOne = function(callback) {
//     callback(null, 'First function result') //Success
//     // callback('Problem in function One', null); //Error
// }

// var functionTwo = function(callback) {
//     callback(null, 'Second function result');
// }

// var functionThree = function(callback) {
//     callback(null, 'Third function result')
// }

// stack.push(functionOne);
// stack.push(functionTwo);
// stack.push(functionThree);

// async.parallel(stack, function(err, result) {
//    if(err) {
//        console.error(chalk.bgRedBright("Error - "+err))
//    } else {
//        console.log(chalk.bgYellowBright(result));
//    }
// })


// Other Example async parallel using setTimeout

async.parallel([
    function(callback) {
      setTimeout(function() {
        console.log('Task One');
        callback(null, 1);
      }, 2000);
    },
    function(callback) {
      setTimeout(function() {
        console.log('Task Two');
        callback(null, 2);
      }, 1000);
    }
  ],
  function(err, results) {
    if(!err) {
        console.log(chalk.bgGreenBright(results));
    } else {
        console.log(chalk.bgRedBright(err));
    }
    // the results array will equal [1, 2] even though
    // the second function had a shorter timeout.
  });


//   firstfuc().then((res) => {
//      senco
//   }).catch() {

//   }