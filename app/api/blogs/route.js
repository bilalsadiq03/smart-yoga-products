import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";


// 1. Create Blog
export async function POST(request) {
    try{
        const { title, content, author, image } = await request.json();
        await connectMongoDB();
        await Blog.create({ title, content, author, image });
        return NextResponse.json("Blog created successfully", {
            status: 201,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json("Error while creating the blog", { status: 500 })
    }
}

// Fetch all Blogs
export async function  GET () {
    try {
        await connectMongoDB();
        const blogs = await Blog.find({});
        return NextResponse.json(blogs, {status: 200});

    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Error fetching blogs" }, { status: 500 });
    }
    
}