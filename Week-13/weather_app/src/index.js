const express = require('express');
const bodyParser = require('body-parser')
const Routes = require('./Routes/routes');
const port = 8000;

const app = express();
// app.use(express.json({ limit: "100mb" }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', Routes);

app.listen(port, (error) => {
    if (error) throw error
    console.log(`Example app listening on port ${port}`)
});