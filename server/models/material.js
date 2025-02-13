import mongoose from "mongoose";
const Schema = mongoose.Schema;

const materialSchema =  new Schema({
    college: {
        type: String,
        required: true
    },
    batch: {
        type: Number,
        required: true
    },
    semester: {
        type: Number,
        required: true
    },
    materialType: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    uploader: {
        type: String
    }
})