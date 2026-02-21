"use client"

import { useState } from "react"
import RichTextEditor from "@/components/RichTextEditor"
import { useRouter } from "next/navigation"
export default function CreatePage() {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
const router = useRouter()
const handleSubmit = async (e) => {
  e.preventDefault()

const res = await fetch("/api/blogs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title, author, content }),
})

  if (res.ok) {
    router.push("/dashboard")
  } else {
    console.error("Failed to create blog.")
  }
}

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">Create Blog</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="border p-3 w-full rounded"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="border p-3 w-full rounded bg-background"
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />

        <RichTextEditor content={content} setContent={setContent} />

        <button className="bg-foreground text-background px-6 py-3 rounded">
          Publish
        </button>
      </form>
    </div>
  )
}