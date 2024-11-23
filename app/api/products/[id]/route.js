import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Product from "@/models/products";
import { ObjectId } from "mongodb";


// Get product with ID
export async function GET(_, res){
    try {
        const { id } = await res.params;
        await connectMongoDB();
        const product = await Product.findOne({ _id: new ObjectId(id) });

        if (!product){
            return NextResponse.json("Product not found", { status: 404 });
        }

        return NextResponse.json(product);

    } catch (error) {
        console.error(error);
        return NextResponse.json("Error fetching Product", {status: 500});
       
    }

}

// Update a Product
export async function PATCH(req, res) {
    try {
        const { id } = await res.params;
        const {name, price, description, productImage, stock} = await req.json();
        await connectMongoDB();
        const product = await Product.findByIdAndUpdate({ _id: new ObjectId(id) }, {
            $set: {
                name,
                price,
                description,
                productImage,
                stock
                }
        })
        return NextResponse.json({product}, { status:200 })

    } catch (error) {
        console.error(error)
        return NextResponse.json("Product Update Failed...", { status: 501 })
    }   
}


// Delete a Product
export async function DELETE(_, res) {
    try {
        const { id } = await res.params;
        await connectMongoDB();
        const product = await Product.findByIdAndDelete({ _id: new ObjectId(id) });
        return NextResponse.json({message: "Product deleted"}, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json("Product Delete Failed...", { status: 500 })
    }
}