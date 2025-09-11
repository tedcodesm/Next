// import mongoose from "mongoose";
// console.log(process.env.NEXT_PUBLIC_MONGO_URI);

// const connectDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       console.log("Already connected.");
//       return;
//     }
//     const conn = await mongoose.connect();

//     console.log(` MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(` Error: ${error}`);
//     process.exit(1);
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URI as string;

declare global {
  var mongoose: {
    conn: mongoose.Mongoose | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDb = async () => {
  if (cached.conn) {
    console.log("db already connected");
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "nextjs",
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("db connected successfully");
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default connectToDb;
