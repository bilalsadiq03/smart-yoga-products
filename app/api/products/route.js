import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Product from "@/models/products";



// 1. GET All Products
export async function GET() {
    try{
        await connectMongoDB();
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (err){
        console.error(err);
        return NextResponse.json("Error fetching products...", {status: 500})
    }
        
}

// 2. Create Product
export async function POST(req) {
    try{
        const {name, price, description, productImage, stock} = await req.json();
        await connectMongoDB();
        const product = Product.create({name, price, description, productImage, stock});
        return NextResponse.json(product, {status: 201})

        } catch (err){
            console.error(err);
            return NextResponse.json("Error creating product...", {status: 500})
        }
}

