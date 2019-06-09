// The User schema.
const User = require("../../Models/User");
const Comment = require("../../Models/Comment");

module.exports = {
    Query: {
        user: (root, args) => {
            return new Promise((resolve, reject) => {
                User.findById(args.id).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        users: () => {
            return new Promise((resolve, reject) => {
                User.find({})
                    .populate()
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        }

    },
    Mutation: {
        addUser: (root, {name, email}) => {
            const newUser = new User({name, email});

            return new Promise((resolve, reject) => {
                newUser.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editUser: (root, {id, name, email}) => {
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({id}, {$set: {name, email}}).exec(
                    (err, res) => {
                        err ? reject(err) : resolve(res);
                    }
                );
            });
        },
        deleteUser: (root, args) => {
            return new Promise((resolve, reject) => {
                User.findOneAndRemove(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    User: {
        async comments(user) {
            return await Comment.find({userId: user._id});
        },

    },
    Comment: {
        async user(comment) {
            return await User.findById(comment.userId);
        }
    },
};
