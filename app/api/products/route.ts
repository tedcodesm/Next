import Product from "@/model/product";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";
import connectDB from "@/lib/db";

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const { name, price, description, rating, category, image } =
      await request.json();

    if (!name || !price || !description || !rating || !category || !image) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return NextResponse.json(
        { message: "Product already exists" },
        { status: 409 }
      );
    }

    const buffer = Buffer.from(image, "base64");

    const uploadDir = path.join(process.cwd(), "public/products");
    await fs.mkdir(uploadDir, { recursive: true });

    const fileName = Date.now() + ".png"; 
    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, buffer);

    const imageUrl = "/products/" + fileName;

    const product = new Product({
      name,
      price,
      description,
      rating,
      category,
      image: imageUrl,
    });

    await product.save();

    return NextResponse.json(
      { message: "Product created successfully", product },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { message: "Error creating product" },
      { status: 500 }
    );
  }
};
