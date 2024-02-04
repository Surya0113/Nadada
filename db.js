import mongoose from 'mongoose';



const DBConnection = async ()=>{
    const MONODB_URI = `mongodb+srv://surya:4321@file-sharing.or1pxht.mongodb.net/?retryWrites=true&w=majority`;
    try{
         await  mongoose.connect(MONODB_URI,{useNewUrlParser: true});
        console.log('db connection successfulkl');
    }catch(error){
        console.error('error with db', error.message)
    }
}

export default DBConnection;