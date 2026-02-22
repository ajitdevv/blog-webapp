"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function BlogDetail() {
  const { id } = useParams()
const [blog,setblog]=useState("")
  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blogs")
      const blogs = await res.json()
      const blog = blogs.find((b) => b.id === id)
      setblog(blog)
    }
    fetchBlog()
  }, [id])

  if (!blog) {
    return <h1 className="text-red-500 p-10">Blog Not Found</h1>
  }

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-muted mb-6">By :-<span className="font-semibold"> {blog.author}</span></p>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <h1 className="mt-2"> Created At :- {new Date(blog.createdAt).toLocaleString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</h1>
    </div>
  )
}