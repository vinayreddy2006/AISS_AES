import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    semester:{
        type:Number,
        required:true
    },
    rollNumber:{
        type:String,
        required:true,
        unique:true
    },
    cgpa:{
        type:Number,
        required:true
    },

    questionPapersAttempted:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"QuestionPaper"
    }],

    department:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }

});

const Student = mongoose.model("Student", studentSchema);
