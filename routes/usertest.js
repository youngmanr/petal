var express = require('express');
var router = express.Router();

/* GET Userlist page. */
router.get('/usertest', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('usertest', {
            "usertest" : docs
        });
    });
});

module.exports = router;