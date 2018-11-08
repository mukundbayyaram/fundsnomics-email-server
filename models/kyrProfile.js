const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kyrProfileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    questions: {
        type: mongoose.SchemaTypes.Mixed,
        required: true
    },
    score: {
        type: String,
        required: true
    }
});

const kyrProfile = mongoose.model('profile', kyrProfileSchema);

module.exports = { kyrProfile }