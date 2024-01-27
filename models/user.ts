import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    company: {
        type: String,
        required: [true, 'Company name is required!'],
        unique: [true, 'Company name is already exist!']
    },
    email: {
        type: String,
        required: [true, 'email is required!'],
        unique: [true, 'email is already exist!']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    }
})

const User = models.User || model('User', UserSchema)

export default User