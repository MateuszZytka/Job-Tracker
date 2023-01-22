const mongoose = require('mongosoe')
const bcrypt = require('bcrypt')

const {Schema} = mongoose
//to do: add application schemas here

const userSchema = new Schema({
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    firstName: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    lastName: {
        type: Schema.Types.String,
        required: true,
        unique: false
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    // to do: add application schemas here
},
{
    toJSON: {
        virtuals: true
    }
})

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = mongoose.model('user', userSchema);

module.exports = User;