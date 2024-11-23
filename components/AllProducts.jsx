import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { IoCartOutline } from "react-icons/io5";

const getProducts = async() => {
    try {
        const products = await fetch("http://localhost:3000/api/products", {
            cache: "no-store"
        })
        console.log(products)

        if (!products.ok) {
            throw new Error("Failed to fetch Products")
        }
        return products.json();
    } catch (error) {
        console.error("Error loading Prodcuts", error)
    }
}




const AllProducts = async () => {

    const products = await getProducts();
    console.log(products)
    

  return (
    <div className="py-12 px-6">
        <h1 className='text-center text-5xl font-semibold mb-6'>Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <Image src={product.productImage} alt={product.name} width={100} height={100} />
                    <div className='mb-4 flex items-center justify-between'>
                        <h2 className="font-semibold">{product.name}</h2>
                        <h2 className='text-forestGreen'>${product.price}</h2>
                    </div>

                    <div className='mb-4'>
                        <p className='text-gray-600'>{product.description.substring(0, 60) + "..."}</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <button className="bg-forestGreen hover:bg-[#378537] text-white font-bold px-4 py-2 rounded">
                            <Link href={`products/${product._id}`}>
                             Read More
                            </Link>
                        </button>
                        <IoCartOutline size={25} />
                    </div>
 
                </div>
        ))}
        </div>
            

    </div>
  )
}

export default AllProducts