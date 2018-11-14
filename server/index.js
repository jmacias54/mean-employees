const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');
const cors = require('cors');

// settings 
app.set('port',process.env.PORT || '3000');
// middelwares 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200'}));
// Routes
app.use('/api/employees',require('./routes/employee.routes'));

//starting server 
app.listen(app.get('port') ,() => {
    console.log(' Server on Port  '+app.get('port'));
})


/* nodemon : para ambiende de desarrollo auto deploy 
    morgan : para ver logs de los request 
*/