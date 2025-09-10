import Product from "@/model/product";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) =>{
try {
    const { name, price, description ,rating, category } = await request.json();

    if (!name || !price || !description || !rating || !category) {
return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }
    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
        console.log("Product already exists:", existingProduct);
        return NextResponse.json({ message: "Product already exists" }, { status: 409 });
    }

    const product = new Product({
        name,
        price,
        description,
        rating,
        category,
    });
    await product.save();
    return NextResponse.json({ message: "Product created successfully", product }, { status: 201 });
} catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}   
}
