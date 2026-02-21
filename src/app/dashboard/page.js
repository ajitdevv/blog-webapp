"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Dashboard() {
    const [blogs, setBlogs] = useState([])

    const fetchBlogs = async () => {
        const res = await fetch("/api/blogs")
        const data = await res.json()
        setBlogs(data)
    }

    useEffect(() => {
        fetchBlogs()
    }, [])

    const handleDelete = async (id) => {
        await fetch("/api/blogs", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
        })

        fetchBlogs() // refresh list
    }

    return (
        <div className="max-w-4xl mx-auto p-10">
            <h1 className="md:text-3xl text-xl font-bold mb-6">Dashboard</h1>

            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="border p-3 md:p-4 mb-4 rounded flex justify-between items-center"
                >
                    <div>
                        <h2 className="font-semibold text-sm md:text-base">{blog.title}</h2>
                        <p className="text-muted text-sm">By:- {blog.author}</p>
                    </div>

                    <div className="flex gap-3">
                        <Link
                            href={`/blog/${blog.id}`}
                            className="text-blue-600 hover:text-blue-400"
                        >
                            View
                        </Link>
                        <Link
                            href={`/edit/${blog.id}`}
                            className="text-green-600 hover:text-green-400"
                        >
                            Edit
                        </Link>
                        <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}