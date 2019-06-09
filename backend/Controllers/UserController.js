const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../Models/User');
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
// CREATES A NEW USER
router.post('/', function (req, res) {
    User.create(req.body,
        function (err, user) {
            if (err) return res.status(500).send(`There was a problem adding the information to the database.\n${err}`);
            res.status(200).send(user);
        });
});
// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});
router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User " + user.name + " was deleted.");
    });
});
// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});
router.get('/:id', function (req, res) {
    console.log(req.params);
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send(`There was a problem finding the user.\n${err}`);
        if (!user) return res.status(404).send("User not found.");
        res.status(200).send(user);
    });
});

router.get('/:id/comments', function (req, res) {
    console.log(req.params);
    Comment.find({userId: req.params.id}, function (err, comments) {
        if (err) return res.status(500).send(`There was a problem finding the user.\n${err}`);
        if (!comments) return res.status(404).send("User not found.");
        res.status(200).send(comments);
    });
});

module.exports = router;



