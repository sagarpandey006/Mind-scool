import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({
      path: "../.env"
})

const databaseConnection = () => {
     mongoose.connect(process.env.MONGO_URI).then(() => {
          console.log("mongodb connected successfully ");
     }).catch((error) => {
          console.log("there is the error ",error);
     })
}


export default databaseConnection; 

