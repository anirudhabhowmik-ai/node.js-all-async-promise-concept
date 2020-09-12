const chalk = require('chalk');
const fetch = require('node-fetch');
// const isBreadAvaliable = false; //In the market
// const isEggAvaliable = false; //In the market

// const promiseExample = () => {
//    return new Promise((resolve, reject) => {
//        if(isBreadAvaliable && !isEggAvaliable) {
//            resolve('Hey, I got the Bread!!!!')
//        } else if(!isBreadAvaliable && isEggAvaliable) {
//            resolve('Hey, Bread not avaliable market, But I got the Egg !!!!')
//        } else if(isBreadAvaliable && isEggAvaliable) {
//           resolve('Hey, I got Bread and Egg from the market !!!!')
//        } else if(!isBreadAvaliable && !isEggAvaliable) {
//            reject('Hey, Bread and Egg is Not Available in the market!!!')
//        }
//    }); 
// }

// promiseExample().then((res) => {
//    console.log(chalk.green(res));
// }).catch((err) => {
//    console.log(chalk.red(err));
// }) 


//Multiple promisses resolve at a time using promiss all

const promise1 = Promise.resolve('I am done');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
   setTimeout(resolve, 2000, 'Goodbye')
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([
    promise1, 
    promise2, 
    promise3, 
    promise4]).then(res => console.log(res));

// Promise.all([
//     promise1, 
//     promise2, 
//     promise3, 
//     promise4
// ]).then(res => console.log(chalk.green(res));