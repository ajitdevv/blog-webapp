let blogs = [
  {
    id: "1",
    title: "Welcome to My Blog",
    author: "Ajeet dev",
    content: `
      <h1>Welcome to My Blog</h1>
      <p>This platform is built using <strong>Next.js</strong> and demonstrates a complete blog system.</p>

      <h2>What You Can Do Here</h2>
      <ul>
        <li>Create new blog posts</li>
        <li>Edit existing posts</li>
        <li>Delete blogs</li>
        <li>Format content using a rich text editor</li>
      </ul>

      <p>
        This project is built to showcase full CRUD functionality along with
        Server-Side Rendering and dynamic routing.
      </p>

      <blockquote>
        Building projects is the best way to learn modern web development.
      </blockquote>
    `,
    createdAt: new Date(),
  },

  {
    id: "2",
    title: "Understanding Server Side Rendering",
    author: "Subhash Aarya",
    content: `
      <h1>Understanding Server Side Rendering (SSR)</h1>

      <p>
        Server-Side Rendering allows web pages to be rendered on the server
        before being sent to the browser.
      </p>

      <h2>Why SSR is Important</h2>
      <ul>
        <li>Better SEO</li>
        <li>Faster initial load</li>
        <li>Improved performance</li>
      </ul>

      <p>
        In Next.js, SSR is achieved by using async server components and
        fetching data before rendering.
      </p>

      <pre><code>
export default async function Page() {
  const res = await fetch("API_URL")
  const data = await res.json()
  return <div>{data.title}</div>
}
      </code></pre>
    `,
    createdAt: new Date(),
  },

  {
    id: "3",
    title: "Why Next.js is Powerful",
    author: "Prince raj",
    content: `
      <h1>Why Next.js is Powerful</h1>

      <p>
        Next.js is a React framework that provides powerful features out of the box.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>App Router</li>
        <li>Server-Side Rendering</li>
        <li>API Routes</li>
        <li>Automatic code splitting</li>
      </ul>

      <p>
        These features help developers build scalable applications quickly.
      </p>

      <blockquote>
        Next.js simplifies full stack development.
      </blockquote>
    `,
    createdAt: new Date(),
  },

  {
    id: "4",
    title: "Building a Blog App with Next.js",
    author: "Vikky Lal",
    content: `
      <h1>Building a Blog App with Next.js</h1>

      <p>
        In this project, we created a blog application using in-memory storage.
      </p>

      <h2>Core Features Implemented</h2>
      <ul>
        <li>Create Blog</li>
        <li>Edit Blog</li>
        <li>Delete Blog</li>
        <li>View Blog Details</li>
      </ul>

      <p>
        The application uses dynamic routing for blog detail pages and API
        routes for managing data.
      </p>

      <pre><code>
await fetch("/api/blogs", {
  method: "POST",
  body: JSON.stringify({ title, content })
})
      </code></pre>
    `,
    createdAt: new Date(),
  },

  {
    id: "5",
    title: "Rich Text Editing with TipTap",
    author: "Sanu",
    content: `
      <h1>Rich Text Editing with TipTap</h1>

      <p>
        We integrated TipTap to allow formatted content creation.
      </p>

      <h2>Formatting Options</h2>
      <ul>
        <li>Bold and Italic</li>
        <li>Headings (H1, H2)</li>
        <li>Lists</li>
        <li>Blockquotes</li>
        <li>Code blocks</li>
      </ul>

      <p>
        The editor stores content in HTML format, which is rendered
        safely using <code>dangerouslySetInnerHTML</code>.
      </p>

      <blockquote>
        A good editor enhances content creation experience.
      </blockquote>
    `,
    createdAt: new Date(),
  }
]

export async function GET() {
    return Response.json(blogs)
}

export async function POST(req) {
    const body = await req.json()

    const newBlog = {
        id: Date.now().toString(),
        ...body,
        createdAt: new Date(),
    }

    blogs.push(newBlog)

    return Response.json(newBlog)
}
export async function DELETE(req) {
    const { id } = await req.json()

    blogs = blogs.filter((blog) => blog.id !== id)

    return Response.json({ message: "Blog deleted" })
}
export async function PUT(req) {
  const { id, title, author, content } = await req.json()

  blogs = blogs.map((blog) =>
    blog.id === id
      ? { ...blog, title, author, content }
      : blog
  )

  return Response.json({ message: "Blog updated" })
}