// Callbacks
// Anonymous
// Definations - A callback is a function is being called when the task has been completed in Asynchronous or Nonblocking way
const chalk = require('chalk');

const posts = [
    { orderIng:1, companyName: 'Google INC', empId: 'GOO3R32'},
    { orderIng:2, companyName: 'Facebook', empId: 'FACEBR32'},
    { orderIng:3, companyName: 'YAHOO', empId: 'YAA3R52'}
];

const getData = () => { //  <--- doubt Javascipt ES5 forEach
    setTimeout(() => {
        console.log(chalk.red(posts.length));
        posts.forEach(element => {
            console.log(chalk.green("{ ordering:"+ element.orderIng+","+"CompanyName:"+element.companyName+","+"EmpId:"+element.empId+" }"));
        });
    }, 1000);
};

const pushData = (data, callback) => {
    setTimeout(() => {
        posts.push(data);
        callback();
    }, 2000);
};

pushData({orderIng:4, companyName: 'UBER', empId: 'UBERNB52'}, getData);

// Program Excute from Line no 28
// After 2 seconds -> Push the data inside the array pushData()
// After 1 seconds -> Fetch the data from the array getData()


// getData(posts);