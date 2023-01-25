const mongoose = require('mongoose');

const {Schema} = mongoose;

const appSchema = new Schema({
    company: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    dateApplied: {
        type: Schema.Types.Date,
        required: true,
        default: Date.now
    },
    status: {
        type: Schema.Types.String,
    },
    interviewRound: {
        type: Schema.Types.String,
    }
})

module.exports = appSchema;