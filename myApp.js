var express = require("express");
var app = express();
let bodyParser = require('body-parser');
console.log("Hello World");
// --> 7)  Mount the Logger middleware here


app.use((req, res, next) => {
  console.log(req.method + ' ' + req.path + ' - ' + req.ip)
  next()
})


// app.get("/", function(req, res) {
//   res.send("Hello Express");
// });

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// --> 11)  Mount the body-parser middleware  here
// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /assets route
app.use("/assets", express.static(__dirname + "/public"));

/** 1) Meet the node console. */
// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json"
//   });
// });


/** 2) A first working Express Server */

app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

/** 3) Serve an HTML file */

/** 4) Serve static assets  */

/** 5) serve JSON on a specific route */

/** 6) Use the .env file to configure the app */

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !

app.get("/json", function (req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({'time': req.time});
})
/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req, res) => {
  res.json({echo : req.params.word})
})
/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

app.get('/name', (req, res) => {
  let str = req.query.first + ' ' + req.query.last
  res.json({name: str})
  
})

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !

app.use(bodyParser.urlencoded({ extended: false }))

/** 12) Get data form POST  */

// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

function createAddItemWindow() {
//Create new window
addItemWindown = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Add Item',

    //The lines below solved the issue
    webPreferences: {
        nodeIntegration: true
    }
})}

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;