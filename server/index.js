//express and app
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


//route handler
app.get('/', (req, res) => {
    res.send({hi: 'there'});
});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



