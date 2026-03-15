import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password:{
    type:String,
    required:true
  },
  phone: {
    type: String,
    required: true,
  },

  questionPapersPrepared:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"QuestionPaper"
  }],

  isAdmin:{
    type:Boolean,
    default:false
  },
  


  isSuperAdmin:{
    type:Boolean,
    default:false
  },
  superAdminRole:{
    type:String,
    default:"Dean"
  }



});

const Faculty = mongoose.model("Faculty", facultySchema);

export default Faculty;