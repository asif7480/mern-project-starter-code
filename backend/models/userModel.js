const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        contact: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true
        },
        roles: {
            type: String,
            required: true,
            enum: ["organizer", "exhibitor", "attendee"],
            default: "attendee",
        },
        isApproved: {
            type: String,
            enum: ["pending", "approved", "reject"],
            default: "pending"
        }
    }, 
    {
        timestamps: true
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User