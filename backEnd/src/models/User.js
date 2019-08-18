import mongoose, { Schema } from 'mongoose';


const UserSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: String,
    lastName:  String
}, {
    timestamps: true
});


const User = mongoose.model('User', UserSchema);
export default User;