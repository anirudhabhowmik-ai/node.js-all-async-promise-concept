const async = require('async');
const chalk = require('chalk');

// Priority Queue

// create a queue object with concurrency 1
var q = async.priorityQueue(function(task, callback) {
    console.log(chalk.bgGreenBright('Hello ' + task.name));
    callback();
}, 1);

// add some items to the queue with priority
q.push({name: 'foo'}, 3, function(err) {
  console.log(chalk.green('Finished processing foo'));
});
  
q.push({name: 'bar'}, 1, function (err) {
  console.log(chalk.green('Finished processing bar'));
});
  
// add some items to the queue (batch-wise) which will have same priority
q.push([{name: 'sunny'},{name: 'animesh'},{name: 'radha'}], 2, function(err) {
  console.log(chalk.green('Finished processing item'));
});
