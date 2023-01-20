const mongoose = require('mongoose');
const password = process.env.ATLASPASS

mongoose.set("strictQuery", false);

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://tracker:'+ password + '@cluster0.dnxmhj4.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

module.exports = mongoose.connection;