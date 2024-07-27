const mongoose = require("mongoose")

const exhibitorSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        products:[
            {
                type: String,
                required: true
            }
        ],
        logo: {
            type: String,
            required: true
        }
        
    }, 
    {
        timestamps: true
    }
)

const Exhibitor = mongoose.model("Exhibitor", exhibitorSchema)
module.exports = Exhibitor