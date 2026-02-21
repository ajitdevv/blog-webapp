"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import RichTextEditor from "@/components/RichTextEditor"

export default function EditPage() {
  const { id } = useParams()
  const router = useRouter()

  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blogs")
      const blogs = await res.json()
      const blog = blogs.find((b) => b.id === id)

      if (blog) {
        setTitle(blog.title)
        setAuthor(blog.author)
        setContent(blog.content)
      }
    }

    fetchBlog()
  }, [id])

  const handleUpdate = async (e) => {
    e.preventDefault()

    await fetch("/api/blogs", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        title,
        author,
        content,
      }),
    })

    router.push("/dashboard")
  }
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Edit Blog</h1>

      <form onSubmit={handleUpdate} className="space-y-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 w-full rounded"
        />

        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-3 w-full rounded"
        />
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-3 w-full rounded"
        />

        <RichTextEditor content={content} setContent={setContent} />

        <button className="bg-green-600 text-background px-6 py-3 rounded">
          Update Blog
        </button>
      </form>
    </div>
  )
}