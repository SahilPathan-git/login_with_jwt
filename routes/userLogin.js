var express = require('express');
var router = express.Router();
var db = require('../db')
const jwt = require('jsonwebtoken');
var { SECRETE_KEY } = require('../config')


router.post('/', async (req, res, next) => {

  const { username, password } = req.body
  console.log(req.body);
  

  const selectQuery = `SELECT * FROM registration WHERE username = ? AND password = ?`;
   
  db.query(selectQuery, [username, password], (error, results) => {
    if (error) {
      console.error('Error executing MySQL query:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    else {
      if (results.length > 0) {

        const Id = results[0].id;
        console.log(Id);

        let data = {
          time: Date(),
          userId: Id
        }
                                                  
        const token = jwt.sign(data, SECRETE_KEY);

        res.json({ token });

        // res.json({ success: true, message: 'Authentication successful' });

      } else {
        res.status(401).json({ success: false, message: 'Authentication failed' });
      }
    }
  }); 

});

module.exports = router;



