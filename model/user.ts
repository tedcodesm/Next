import mongoose ,{Document, Model, Schema} from "mongoose";

export interface MyUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt : string;

}

const userSchema = new Schema<MyUser>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
  timestamps: { createdAt: 'createdAt' }
},);

const User: Model<MyUser> =
  mongoose.models.User || mongoose.model<MyUser>("User", userSchema);
  
export default User;
