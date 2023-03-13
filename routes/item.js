var express = require('express');
var router = express.Router();

//import database
var connection = require('../library/database');

/**
 * INDEX item
 */
router.get('/', function (req, res, next) {
    //query
    connection.query('SELECT * FROM item ORDER BY id desc', function (err, rows) {
        if (err) {
            req.flash('error', err);
            res.render('item', {
                data: ''
            });
        } else {
            //render ke view item index
            res.render('item/index', {
                data: rows // <-- data item
            });
        }
    });
});

module.exports = router;