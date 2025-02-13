import mongoose from "mongoose";
const Schema = mongoose.Schema;

const collegeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: ture
    },
    state: {
        type: String,
        required: ture
    },
    city: {
        type: String,
        required: ture
    },
    courses:[
        {
            name: String
        }
    ],

})


module.exports = College = mongoose.model("college", collegeSchema)