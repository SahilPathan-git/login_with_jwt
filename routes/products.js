var express = require('express');
var router = express.Router();
var db = require('../db')

router.get('/', async (req, res, next) => {
    console.log("first");

    const getquery = "SELECT * FROM products";
    db.query(getquery, (err, result) => {
        if (err) {
            console.error("Error executing MySQL query: " + err.stack);
            res.status(500).json({ error: "Internal Server Error" });
            return; 
        } else {
            res.send(result);
        } 
    });
});



module.exports = router;





