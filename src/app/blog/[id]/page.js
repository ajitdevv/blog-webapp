export default async function BlogDetail({ params }) {
  const { id } = await params
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store",
  })

  const blogs = await res.json()

  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    return <h1 className="text-red-500 p-10">Blog Not Found</h1>
  }
  console.log(blog);

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <p className="text-muted mb-6">By :-<span className="font-semibold"> {blog.author}</span></p>
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
      <h1 className="mt-2"> Created :- {new Date(blog.createdAt).toLocaleString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</h1>
    </div>
  )
}