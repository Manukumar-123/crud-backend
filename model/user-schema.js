import mongoose from "mongoose";
 const userSchema = mongoose.Schema({
    name: String,
    username : String,
    dob : String,
    mobile : String
});
 
const user = mongoose.model('User', userSchema);
//mongoose.models = {}
export default user;
