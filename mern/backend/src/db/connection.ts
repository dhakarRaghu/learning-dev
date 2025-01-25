import {connect , disconnect} from 'mongoose';

 async function connectToDatabase(){
    try {

       const  mon_url = process.env.MONGODB_URL as string;
        await connect(mon_url);
        console.log('Connected to the database');
        }
    catch (error){
            console.log(error);
            throw new Error('Error connecting to the database');
        }
        
     }

     async function  disconnectFromDatabase(){
        try {
            await disconnect();
            console.log('Disconnected from the database');
            }
        catch (error){
                console.log(error);
                throw new Error('Error disconnecting from the database');
            }
     }

     export { connectToDatabase ,disconnectFromDatabase};