const mongoose = require("mongoose")

const expoSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: {
            type: mongoose.Schema.Types.Date,
            required: true
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            required: true,
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

const Expo = mongoose.model("Expo", expoSchema)
module.exports = Expo