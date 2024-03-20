import mongoose from "mongoose"
const schema = mongoose.Schema

const UserSchema = new schema ({
    firstName : {
        type: String,
        required: true
    },
   lastName: {
        type: String,
        required: true 
    },

    email: {
type: String,
required: true
    },
    password: {
        type: String,
        require: true,
        min: 6
    }
})

export const userModel = mongoose.model("User", UserSchema);

