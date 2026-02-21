import Link from "next/link"
export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blogs`, {
    cache: "no-store",
  })
  const blogs = await res.json()
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Latest Blogs
        </h2>
        {blogs.length === 0 ? (
          <p>No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-card shadow p-6 mb-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">
                {blog.title}
              </h3>
              <p className="text-foreground text-sm mb-3">
                By :- {blog.author}
              </p>
              <div
                className="text-foreground mb-4 line-clamp-1"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              />
              <Link
                href={`/blog/${blog.id}`}
                className="text-primary hover:text-primary/70 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}