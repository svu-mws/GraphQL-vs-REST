const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Comment = require('../Models/Comment');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', function (req, res) {
    Comment.find({}, function (err, user) {
        if (err) return res.status(500).send(`There was a problem finding the user.\n${err}`);
        if (!user) return res.status(404).send("Comment not found.");
        res.status(200).send(user);
    });
});

router.get('/:id', function (req, res) {
    console.log(req.params);
    Comment.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send(`There was a problem finding the user.\n${err}`);
        if (!user) return res.status(404).send("Comment not found.");
        res.status(200).send(user);
    });
});

module.exports = router;



