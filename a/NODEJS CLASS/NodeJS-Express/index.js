const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const fs = require('fs');

var app = express();

app.use(express.static('public')); //middleware
app.use(bodyParser.urlencoded({ //middleware
    extended: true
}))
app.get('/', function (req, res) { //middleware
   res.sendFile( __dirname + "/" + "index.html" );
})

// Api check endpoint
app.get('/check/endpoint', (req, res)=> {
   res.send({
       status: 200,
       message: 'API is working fine !'
   })
});

// GET and POST


//Get method
app.post('/submitdata', function (req, res) {  // Design to get the data from the server and appends the from data to the request url
    // Prepare output in JSON format
    console.log(chalk.green(req.body));
    var response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name //query params
    };
    // var response = {
    //   first_name:req.query.first_name,
    //   last_name:req.query.last_name //query params
    // };
    console.log(chalk.bgYellow(JSON.stringify(response)));
    fs.writeFile('entry.json', JSON.stringify(response),function(err) { //Design to send the data to the server and It carry unlimited data any any type of data, like image, mp3, mp4, video e.t.c
        if (err) throw err;
        console.log(chalk.green('File Saved!'));
    })
    res.end(JSON.stringify(response));
})

// Post Method and please change the method POST from index.html file
// app.get('/submitdata', function (req, res) {
//    // Prepare output in JSON format
//    response = {
//       first_name:req.body.first_name,
//       last_name:req.body.last_name
//    };
//    console.log(response);
//    fs.writeFile('entry.json', JSON.stringify(response),function(err) { 
//         if (err) throw err;
//         console.log('File Saved!');
//    })
//    res.end(JSON.stringify(response));
// })

var server = app.listen(8080, function () {
   //  var host = server.address().address
   var port = server.address().port
   
   console.log(chalk.green("Example app listening at - ", port))
})


// JWT token