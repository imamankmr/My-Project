import mongoose from "mongoose";

const URI = "mongodb+srv://amanjnvr:Aman1368@project1.ngvp9bg.mongodb.net/";

const connectDB = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  }else{
     const newDB = await mongoose.connect(URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
     });
     cachedDB = newDB;
     return newDB;
  }
 
};

export default connectDB;
