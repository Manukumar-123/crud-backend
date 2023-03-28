import mongoose from 'mongoose';

const Connection = async (username,password) =>{ 
const url = `mongodb://${username}:${password}@ac-3pvncn5-shard-00-00.sb6mzsr.mongodb.net:27017,ac-3pvncn5-shard-00-01.sb6mzsr.mongodb.net:27017,ac-3pvncn5-shard-00-02.sb6mzsr.mongodb.net:27017/?ssl=true&replicaSet=atlas-13e9w8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try{
        mongoose.set('strictQuery', true);
        await mongoose.connect(url,{useUnifiedTopology: true, useNewUrlParser: true});
        console.log('successfully run ');
    }
    catch(error)
    {
        console.log(`error from the adduser ${error}`);
    }
}
export default Connection;
