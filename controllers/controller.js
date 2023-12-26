import User from '../model/User.js';
import bcrypt from 'bcryptjs';

export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    } catch(err) {
     console.log(err);
    }
    if(!users){
        return res.status(404).json({ message: "Found No Users"});
    }
    return res.status(200).json({users});
};

export const signup = async (req, res, next) => {
    const {name,email,password} = req.body;
    let existUser;
    try{
    existUser =  await User.findOne({email})
    }
    catch(err){
   return console.log(err);
    }

    if(existUser){
    return  res.status(400).
    json({message: "Already exist user! Instead Login"});
}

const hashedPassword = bcrypt.hashSync(password);

const user = new User({
    name,
    email,
    password: hashedPassword,
    blogs: [],
});

try{
    user.save();
    } catch(err){
return  console.log(err);
    }

return res.status(201).json({user})
};

 export const login = async(req,res,next) => {
    const {email,password} = req.body;
    let existUser;
    
    try{
        existUser =  await User.findOne({email});
        }
        catch(err){
       return console.log(err);
        }
    
        if(!existUser){
        return  res.status(404).
        json({message: "User Not Found Using This Email"});
        }
    
        const isPasswordCorrect = bcrypt.compareSync(password,existUser.password);
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Wrong Password"});
        }
        return res.status(200).json({message:"Successfully Login", user: existUser});
}