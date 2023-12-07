
var express = require('express');
var router = express.Router();
var db = require('../db')

router.post('/', async (req, res, next) => {
 
    const { username, password, first_name, last_name, active, } = req.body
    console.log(req.body);
     
    

    const currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
    console.log(currentDate);

    const insertQuery = 'INSERT INTO registration (username, password, created_date, updated_date, first_name, last_name, active) VALUES (?,?,?,?,?,?,?)';
 
    try {
        const results = await db.query(insertQuery, [username, password, currentDate, currentDate, first_name, last_name, active]);
        return res.status(201).json({ success: true, message: 'Data inserted successfully' });
    } catch (error) {
        console.error('Error inserting data into MySQL:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
});

module.exports = router;  


