const {Seeder} = require("mongoose-data-seed");
const User = require("../backend/Models/User");
const Comment = require("../backend/Models/Comment");

const comments = [
    {
        text: "Kinda good"
    },
    {
        text: "Terrible"
    },
    {
        text: "Wonderful"
    },
    {
        text: "Perfect"
    },
    {
        text: "Extremely good"
    },
    {
        text: "Wow!"
    },
    {
        text: "Very bad"
    },
    {
        text: "Awful"
    },
    {
        text: "Nah"
    },
];

class CommentsSeeder extends Seeder {
    async beforeRun() {
        this.users = await User.find({}).exec();
    }

    async shouldRun() {
        return User
            .countDocuments()
            .exec()
            .then(count => count !== 0);
    }

    async run() {
        for (const [index, comment] of comments.entries()) {
            const userIndex = Math.floor(index / this.users.length);
            comment.userId = this.users[userIndex]._id;
        }
        return Comment.create(comments);
    }
}

module.exports = CommentsSeeder;
