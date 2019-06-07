const UserModel = require("./Models/User");
const CommentModel = require("./Models/Comment");

UserModel.remove({});
CommentModel.remove({});

const users = [
    {
        name: "Ahmad",
        email: "ahmad.user@gmail.com",
        imageUrl: "https://randomuser.me/api/portraits/men/66.jpg"
    },
    {
        name: "Mhd",
        email: "mhd.user@gmail.com",
        imageUrl: "https://randomuser.me/api/portraits/men/67.jpg"
    },
    {
        name: "Mahmoud",
        email: "mahmoud.user@gmail.com",
        imageUrl: "https://randomuser.me/api/portraits/men/68.jpg"
    }
];

const comments = [
    {
        text: "First First Comment"
    },
    {
        text: "First Second Comment"
    },
    {
        text: "First Third Comment"
    },
    {
        text: "Second First Comment"
    },
    {
        text: "Second Second Comment"
    },
    {
        text: "Second Third Comment"
    },
    {
        text: "Third First Comment"
    },
    {
        text: "Third Second Comment"
    },
    {
        text: "Third Third Comment"
    },
];

users.forEach(user => {
    UserModel.create(user, function (err, small) {
        console.log(err);
    });
});

comments.forEach((comment, index) => {
    UserModel.find({}, function (error, users) {
        const user = users[Math.ceil(index / users.length) - 1];
        comment.userId = user._id;
        CommentModel.create(comment, function (err, small) {
        });
    });
});