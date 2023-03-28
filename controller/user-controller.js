import User from '../model/user-schema.js';

//post request
export const addUser = async (req,res) => {

const user = req.body;
const newUser = new User(user);

    try{
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch(error)
    {
        res.status(424).json({message:error.message});
    }
}

//get request
export const getUser = async (req,res) =>
{
    try{
         const user = await User.find();
         if(user.length != 0) return  res.status(200).json(user);
            res.status(404).json({message:'user not found'});
            
    }catch(error){
        res.status(404).json({message:error.message})
    }
}

//get req by id 
export const getUserById = async (req,res) => {
    try{
       const singleUser = await User.findById(req.params.id);
       if(singleUser) return res.status(200).json(singleUser);
       res.status(404).json({message: 'Data not found'})
    }catch(error){
        res.status(424).json({message:error.message})
    }
}

//put request
export const editUser = async (req,res) => {
    let user = req.body;
    const editdata = new User(user);

    const query = {
        _id : req.params.id
    }
    try{
        const edituser = await User.updateOne(query, editdata);
        if(edituser.modifiedCount == 1) return res.status(201).json(edituser);
        res.status(304).json({message:'user not updated'});
    }
    catch(error){
        res.status(424).json({message:error.message})
    }
}

//delete user

export const deleteUser = async (req,res) => {
    try{
       const userDelete = await User.deleteOne({_id : req.params.id});
       if(userDelete.deletedCount == 1) return  res.status(200).json({message : 'user deleted successfuly'})
        res.status(304).json({message:'user not deleted'});
    }catch(error){
        res.status(404).json({message:error.message})
    }
}