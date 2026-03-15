// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';
// import Faculty from '../../models/faculty.js';


// export const facultyLogin=async(req,res)=>{
//     const {email,password}=req.body;

//     try{
//         const faculty=await Faculty.findOne({email});

//         if(!faculty){
//             return res.status(404).json({success:false,message:'Faculty not found'});
//         }

//         const isPasswordValid=await bcrypt.compare(password,faculty.password);


//         if(!isPasswordValid){
//             return res.status(401).json({success:false,message:'Invalid Password'});
//         }



//     }
// }
