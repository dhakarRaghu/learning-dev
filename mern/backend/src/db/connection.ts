import {connect , disconnect} from 'mongoose';

 async function connectToDatabase(){
    try {
        // if (!process.env.MONGODB_URL) {
        //     throw new Error('MONGODB_URL is not defined');
        // }
        await connect("mongodb+srv://chat-bot:chat-bot@cluster0.hv1du.mongodb.net/mern");
        console.log('Connected to the database');
        }
    catch (error){
            console.log(error);
            throw new Error('Error connecting to the database');
        }
        
     }

     async function  disconnectFromDatabase(){
        try {
            // if (!process.env.MONGODB_URL) {
            //     throw new Error('MONGODB_URL is not defined');
            // }
            await disconnect();
            console.log('Disconnected from the database');
            }
        catch (error){
                console.log(error);
                throw new Error('Error disconnecting from the database');
            }
     }

     export { connectToDatabase ,disconnectFromDatabase};