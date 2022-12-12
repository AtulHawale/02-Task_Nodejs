var express = require('express');
var path = require('path');


var numberRoutes = require('./routes/number');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', numberRoutes);

app.post("/shownumber", (req, res)=>{
    console.log("in post, doing login")
    console.log(req.body);
   
        res.render("shownumber",{number:req.body.inumber})
    
    // find username and password, if username and password are same and not empty
        // show welcome page
    // else 
        // show login page with error
  });



app.listen(3000,()=>{
    console.log("APP IS ON!!!!!!!")
})

