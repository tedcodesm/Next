import { NextResponse } from "next/server";
import connectDB from "../../../lib/db";
import User from "../../../model/user";

// Handle POST request
export async function POST(req: Request) {
  await connectDB();

  try {
    const { name, email, password } = await req.json();
    const newUser = new User({ name, email, password });
    await newUser.save();

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle GET request
export async function GET() {
  await connectDB();

  try {
    const users = await User.find({});
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
