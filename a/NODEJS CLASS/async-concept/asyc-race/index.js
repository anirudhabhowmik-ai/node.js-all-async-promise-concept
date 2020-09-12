const async = require('async');
const chalk = require('chalk');

// Operation here --> File --> Time limit of your function
// It execuses first function then stop --> 3 timer --> time
const arr = [1000, 2000, 100];

const first1 = arr[0];
const first2 = arr[1];
const first3 = arr[2];

async.race(
[
    function (callback) {
      setTimeout(function () {
        console.log(chalk.greenBright('I am first function'));  
        callback(null, 'one');
      }, first1);
    },
    function (callback) {
      setTimeout(function () {
        console.log(chalk.greenBright('I am second function'));
        callback(null, 'two');
      }, first2);
    },
    function (callback) {
       setTimeout(function () {
        console.log(chalk.greenBright('I am third function'));
        callback(null, 'three');
       }, first3);
     }
],
    // main callback
function (err, result) {
    // the result will be equal to 'two' as it finishes earlier than the other 2
    console.log(chalk.bgYellowBright('The result is - ', result));
});