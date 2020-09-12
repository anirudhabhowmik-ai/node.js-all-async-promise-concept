
var fs = require('fs');


var myObj = {};

function doA() {
    return new Promise(function(resolve, reject){
        fs.readFile('file1.txt', function(err, data) {
            if(!err) {
                resolve(data.toString())
            }
         });         
    })
}

function doB() {
    return new Promise(function(resolve, reject){
        fs.readFile('file2.txt', function(err, data) {
            if(!err) {
                resolve(data.toString())
            }
        });
    })
}

// Normal then Function
// doA().then(function(data) {
//    myObj['data1'] = data;
//    doB().then(function(data2) {
//       myObj['data2'] = data2;
//       console.log(myObj);
//    });
// });


/* Rule of Async */

/* 
    1. When you write a function, your function keyword has to be starts with async
    2. Inside that function you can make a use of await keyword
    3. You can't use await keyword without async
*/

//Async
async function main() {
    // myObj['data1'] = await doA();
    // myObj['data2'] = await doB();
    // console.log(myObj);
    var result1  = await doA(); //1st
    var result2 = await doB();  //second
    // var result3  = await doC();
    // var result4 = await doD();
    Promise.all([result1, result2, result3, result4]).then(res => console.log(res));
    // 
}

main()