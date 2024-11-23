import connectMongoDB from "@/lib/mongodb";
import User from "@/models/user";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";



// Fetch s User with ID
export async function GET(_, res){
    try {
        const {id} = await res.params;
        await connectMongoDB();
        const user = await User.findOne({ _id: new ObjectId(id) });
        if (!user){
            return NextResponse.json("User not found", { status: 404 });
        }
        return NextResponse.json({user});
        
    } catch (error) {
        console.error(error)
        return NextResponse.json("Error fetching User", {status: 500});
    }
}

// Update a User by Id
export async function PATCH(req, res) {
    try {
        const { id } = await res.params;
        const { name, email, password, userId } = await req.json();
        await connectMongoDB();
        const user = await User.findByIdAndUpdate({ _id: new ObjectId(id) }, {
            $set: {
                name,
                email,
                password,
                userId
                }
        })
        return NextResponse.json({user}, { status:200 })

    } catch (error){
        console.error(error)
        return NextResponse.json("Error updating User", { status: 500 });
    }
}

// Delete a User
export async function DELETE(_, res) {
    try {
        const { id } = await res.params;
        await connectMongoDB();
        const user = await User.findByIdAndDelete({ _id: new ObjectId(id) });
        return NextResponse.json({message: "User deleted"}, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json("User Delete Failed...", { status: 502 })
    }
}