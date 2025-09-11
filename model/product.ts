import mongoose, { Schema } from "mongoose";


export interface Products extends mongoose.Document{
    name: string;
    price: number;
    description: string;
    category: string;
    rating: number;
    image: string;
    createdAt: string;
}

const productSchema = new Schema<Products>({
    name:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        default: 0,
    },
    image:{
        type: String,
        required: true,
    }
    
},{
    timestamps: { createdAt: 'createdAt' }
});

const Product = mongoose.models.Product || mongoose.model<Products>("Product", productSchema);

export default Product;