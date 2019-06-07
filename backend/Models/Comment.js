const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    text: {
        type: String,
        required: true,
    }
});

CommentSchema.set('timestamps', true);
module.exports = mongoose.model('Comment', CommentSchema);
