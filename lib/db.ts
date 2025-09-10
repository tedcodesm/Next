import mongoose from "mongoose";
console.log(process.env.NEXT_PUBLIC_MONGO_URI);

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected.");
      return;
    }
    const conn = await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI);

    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(` Error: ${error}`);
    process.exit(1); 
  }
};

export default connectDB;
