const app = require('express')();
const bodyParser = require('body-parser');

const PORT = require('./config/config').PORT || 3200;

app.use(bodyParser.json());

require('./db');
require('./routes/routes')(app);

app.use((error, req, res, next) => {
    console.log("Error: ", error);
    res.status(400).send({ error: error.message });
});

app.listen(PORT, function() {
    console.log("Server running at PORT:", PORT);     
});

module.exports = app;