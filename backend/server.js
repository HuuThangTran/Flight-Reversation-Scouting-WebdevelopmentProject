var express = require("express");
var path = require("path");
var app = express();


// Tell Express to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);

// Route to serve index.html
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
})


// Route to serve signin.html
app.get("/signin", (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'signin.html'));
});