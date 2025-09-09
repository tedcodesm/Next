import mongoose from "mongoose";
console.log(process.env.NEXT_PUBLIC_MONGO_URI);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://kaahenjoroge_db_user:se3ox3GmdbsAcl38@cluster0.s8gr7sq.mongodb.net/Nextjsusers?retryWrites=true&w=majority&appName=Cluster0");

    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` Error: ${error}`);
    process.exit(1); 
  }
};

export default connectDB;
