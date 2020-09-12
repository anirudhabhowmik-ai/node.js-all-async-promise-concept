const fs = require('fs');
const chalk = require('chalk');

const readFile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('unstructured.json', 'utf8', (err, data) => {
            if (err) {
                reject('File not found');
            } else {
                resolve(data);
            }
        })
    })
}

const writeFile = (data) => {
   return new Promise((resolve, reject) => {
       fs.writeFile('make.json', data, 'utf8', (err, res) => {
           if(err) {
               reject('Something Wrong!');
           } else {
               resolve('File write successfully!!');
           }
       }) 
   });
};

const structuredJSON = (res) => {
    const resp = JSON.parse(res);
    const billdesc = resp.billingcurrdesc;
    const billingcurr = resp.billingcurr;
    const finalres = {
        billing_currency: [],
    };
    console.log(resp);

    for(var i=0;i<billdesc.length;i++) {
        finalres.billing_currency.push({
           "description" : billdesc[i],
           "currency_code": billingcurr[i]
        })
    }
    return finalres;
}

readFile().then(async(res) => {
   const formatJson = await structuredJSON(res);
   const finJSON = JSON.stringify(formatJson)
   writeFile(finJSON).then((r) => {
       console.log(chalk.green(r));
   });
}).catch((err) => {
   console.log(err);
}); 