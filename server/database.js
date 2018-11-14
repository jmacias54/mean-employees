/* mongoose : conectar hacia mongodb  */
const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/mean-crud'
// localhost:27017

mongoose.connect(URI)
        .then(db => console.log('DB is connected'))
        .catch(error => console.log(error));
module.exports = mongoose;
