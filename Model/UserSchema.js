const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
name: { 
    type: String,
    require : true,
    },
email: {
    type: String,
    require : true
},
password: {
    type: String,
    require : true
}
});
const userModel = mongoose.model('User', UserSchema);
module.exports = userModel