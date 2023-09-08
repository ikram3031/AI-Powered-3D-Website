import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    const newUser = new User({ name, email, password: hashedPassword, role: "super_admin" });

    // Attempt to save the user and handle any errors
    try {
      await newUser.save();
      console.log("User saved successfully:", newUser);
    } catch (saveError) {
      console.error("Error saving user:", saveError);
      throw saveError; 
    }

debugger;
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}