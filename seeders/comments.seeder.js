const {Seeder} = require("mongoose-data-seed");
const User = require("../backend/Models/User");
const Comment = require("../backend/Models/Comment");

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

class CommentsSeeder extends Seeder {
    async beforeRun() {
        this.users = await User.find({}).exec();
    }

    async shouldRun() {
        return User.countDocuments()
            .exec()
            .then(count => count !== 0);
    }

    async run() {
        let commentsData = comments;
        let slope = this.users.length / commentsData.length;
        for (const [index, comment] of commentsData.entries()) {
            let userIndex = Math.floor(slope * index);
            comment.userId = this.users[userIndex]._id;
        }

        return Comment.create(commentsData);

    }
}

module.exports = CommentsSeeder;
