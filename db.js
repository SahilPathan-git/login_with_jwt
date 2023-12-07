const mysql = require('mysql')


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'sahil',
    password: 'sahil',
    database: 'amazon',
    insecureAuth: true,
    port: 3307

});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err);
        return;
    }
    console.log('Connected ');
});

module.exports = connection;