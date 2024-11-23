import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import bcryptjs from 'bcryptjs'


export async function  GET () {
    try {
        await connectMongoDB();
        const users = await User.find({});
        return NextResponse.json({users}, {status: 200});

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Error fetching users" }, { status: 500 });
    }
    
}


// 3. Creae User
export async function POST(req) {
    try{
        const { name, userId, email, password } = await req.json();
        await connectMongoDB();

        const genSalt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, genSalt) 

        await User.create({ name, userId, email, hashedPassword });
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch(error) {
        console.error(error);
        return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}