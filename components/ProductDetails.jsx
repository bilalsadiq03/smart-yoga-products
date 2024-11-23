import React from 'react'
import Image from 'next/image';
import {
    FaBox,
    FaClock,
    FaShoppingCart,
    FaStar,
    FaStore,
  } from "react-icons/fa";
import Link from 'next/link';

const ProductDetails = (product) => {
  return (
    <div>
        <div className='mt-6'>
        <Link href="/" className="font-semibold hover:underline ml-14">
          Go Back
        </Link>

        <div className="flex relative items-between mt-[2rem] right-0">
            <div>
              <Image
                src={`/api/${product.productImage}`}
                alt={product.name}
                className="w-full xl:w-[40rem] lg:w-[40rem] md:w-[30rem] sm:w-[20rem] mr-[2rem]"
              />

              {/* <HeartIcon product={product} /> */}
            </div>

            <div className="flex flex-col justify-between">
              <h2 className="text-2xl font-semibold">{product.name}</h2>
              <p className="my-4 xl:w-[35rem] lg:w-[35rem] md:w-[30rem] text-[#B0B0B0]">
                {product.description}
              </p>

              <p className="text-5xl my-4 font-extrabold">$ {product.price}</p>
              <div className='flex items-center justify-between w-[20rem]'>
                <div className='one'>
                  <h1 className='flex items-center mb-6'>
                    <FaClock className='mr-2 ' /> Added: {" "}
                    {/* {moment(product.createAt).fromNow()} */}
                  </h1>
                  <h1 className='flex items-center mb-6'>
                    <FaStar className='mr-2 ' /> Reviews: {" "}
                    {product.numReviews}
                  </h1>
                </div>
                <div className="two">
                  <h1 className="flex items-center mb-6">
                    {/* <FaStar className='mr-2'/> Ratings: {rating} */}
                  </h1>
                  <h1 className="flex items-center mb-6">
                    <FaShoppingCart className='mr-2'/> Quantity: {product.stock}
                  </h1>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
              {/* <Ratings
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
              /> */}
                
                {product.stock > 0 && (
                  <div>
                    {/* <select
                      value={qty}
                      onChange={(e) => setQty(e.target.value)}
                      className="p-2 w-[6rem] rounded-lg text-black"
                    >
                      {[...Array(product.stock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select> */}
                  </div>
                )}
              </div>
              <div className="btn-container">
                <button
                //   onClick={addToCartHandler}
                  disabled={product.stock === 0}
                  className="bg-pink-600 text-white py-2 px-4 rounded-lg mt-4 md:mt-0"
                >
                  Add To Cart
                </button>
              </div>
            </div> 
            
          </div>
          <div className="mt-[5rem] container flex flex-wrap items-start justify-between ml-[10rem]">
              {/* <ProductTab
                loadingProductReview={loadingProductReview}
                userInfo={userInfo}
                submitHandler={submitHandler}
                rating={rating}
                setRating={setRating}
                comment={comment}
                setComment={setComment}
                product={product}
              /> */}
            </div>
        
      </div>
    </div>
  )
}

export default ProductDetails