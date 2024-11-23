import connectMongoDB from "@/lib/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";



// Get a Blog by ID
export async function GET(_, res){
    try {
        const { id } = await res.params;
        await connectMongoDB();
        const blog = await Blog.findOne({ _id: new ObjectId(id) });

        if (!blog){
            return NextResponse.json("Blog not found", { status: 404 });
        }

        return NextResponse.json(blog);

    } catch (error) {
        console.error(error);
        return NextResponse.json("Error fetching Blog", {status: 500});
       
    }

}

// Update a Blog
export async function PATCH(req, res) {
    try {
        const { id } = await res.params;
        const {title, content, author} = await req.json();
        await connectMongoDB();
        const blog = await Blog.findByIdAndUpdate({ _id: new ObjectId(id) }, {
            $set: {
                title,
                content,
                author,
                }
        })
        return NextResponse.json({blog}, { status:200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json("Blog Update Failed...", { status: 501 })
    }   
}


// Delete a Blog
export async function DELETE(_, res) {
    try {
        const { id } = await res.params;
        await connectMongoDB();
        const blog = await Blog.findByIdAndDelete({ _id: new ObjectId(id) });
        return NextResponse.json({message: "Blog deleted"}, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json("Blog Delete Failed...", { status: 502 })
    }
}