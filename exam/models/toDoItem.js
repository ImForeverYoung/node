import mongoose from 'mongoose'
const { Schema, model } = mongoose
const todoitemSchema=new Schema({
    heading: {type: String, required: true},
    description: {type: String, required: true},
    isFinished: {type: Boolean,required: true, default: false},
    
})

export default model("toDoItem",todoitemSchema)