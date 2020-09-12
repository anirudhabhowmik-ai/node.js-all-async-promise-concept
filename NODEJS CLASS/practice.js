
// // Blocking IO Or Synchronous Example

// var contents = fs.readFileSync('tution.txt', 'utf8'); // 5 minutes
// console.log(contents);

// console.log(chalk.red('after calling readFile'));



// NON-Blocking IO or Asynchronous Example

fs.readFile('tution.txt','utf8', (err, data) => { //Callback
    if (err) throw err;
    console.log(data);
});

console.log(chalk.red('after calling readFile'));