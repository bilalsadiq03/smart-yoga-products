import Link from 'next/link'
import React from 'react'



const getBlogs = async() => {
    try {
        const res = await fetch("http://localhost:3000/api/blogs", {
            cache: "no-store"
        })
        console.log(res)

        if (!res.ok) {
            throw new Error("Failed to fetch Blogs")
        }
        const blogs = await res.json();
        console.log(blogs)
        return blogs;
    } catch (error) {
        console.error("Error loading Blogs", error)
    }
}

const Blogs = async () => {

    const blogs = await getBlogs();
    console.log(blogs)



  return (
    <div className="container mx-auto py-16">
      <h2 className="text-center text-5xl font-semibold mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            blogs.map((blog) => (
                <div key={blog._id} className="bg-white text-black p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-bold">{blog.title}</h3>
                    <p className="text-gray-600 mt-4">{blog.content}</p>
                    <Link href={`/blog/${blog._id}`} className="text-blue-500 mt-4 inline-block">
                        Read More
                    </Link>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default Blogs