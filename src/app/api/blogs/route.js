let blogs = [

  {
    id: "1",
    title: "Starting My Blogging Journey with Next.js",
    author: "Ajeet Dev",
    content: `
      <h1>Starting My Blogging Journey with Next.js</h1>

      <p>
        Every developer reaches a point where building real-world projects
        becomes more important than just watching tutorials. This blog
        platform is one such step in my learning journey.
      </p>

      <p>
        I built this project using <strong>Next.js</strong> to understand
        how modern full-stack applications work in real scenarios.
      </p>

      <h2>What This Platform Allows</h2>
      <ul>
        <li>Create and publish blog posts</li>
        <li>Edit content anytime</li>
        <li>Delete posts easily</li>
        <li>Write formatted content using a rich text editor</li>
      </ul>

      <blockquote>
        The best way to learn development is by building something real.
      </blockquote>

      <p>
        This project helped me understand routing, API handling,
        and how frontend connects with backend logic.
      </p>
    `,
    createdAt: new Date(),
  },

  {
    id: "2",
    title: "What I Learned About Server-Side Rendering",
    author: "Subhash Aarya",
    content: `
      <h1>What I Learned About Server-Side Rendering</h1>

      <p>
        While building projects with Next.js, I came across the concept
        of Server-Side Rendering (SSR). At first it sounded complex,
        but once implemented, it made complete sense.
      </p>

      <h2>Why SSR Matters</h2>
      <ul>
        <li>Improves SEO performance</li>
        <li>Loads content faster for users</li>
        <li>Better for dynamic data</li>
      </ul>

      <p>
        Instead of sending an empty HTML page and loading everything
        on the client, SSR renders the page on the server and then
        sends ready-to-view content to the browser.
      </p>

      <pre><code>
export default async function Page() {
  const res = await fetch("API_URL")
  const data = await res.json()
  return <div>{data.title}</div>
}
      </code></pre>

      <p>
        Understanding SSR changed how I think about performance
        and user experience in web applications.
      </p>
    `,
    createdAt: new Date(),
  },

  {
    id: "3",
    title: "Why Next.js Feels So Powerful",
    author: "Prince Raj",
    content: `
      <h1>Why Next.js Feels So Powerful</h1>

      <p>
        After working with plain React, switching to Next.js felt like
        unlocking a new level of development.
      </p>

      <h2>Features That Stood Out to Me</h2>
      <ul>
        <li>File-based routing</li>
        <li>Server and Client components</li>
        <li>API routes built-in</li>
        <li>Automatic performance optimizations</li>
      </ul>

      <p>
        What I love most is that Next.js makes full-stack development
        feel structured and organized.
      </p>

      <blockquote>
        With the right framework, building scalable apps becomes easier.
      </blockquote>
    `,
    createdAt: new Date(),
  },

  {
    id: "4",
    title: "Building My Own Blog Application",
    author: "Vikky Lal",
    content: `
      <h1>Building My Own Blog Application</h1>

      <p>
        I decided to build a blog application from scratch to test
        my understanding of CRUD operations.
      </p>

      <h2>Core Features Implemented</h2>
      <ul>
        <li>Create new blog posts</li>
        <li>Edit existing blogs</li>
        <li>Delete posts</li>
        <li>View individual blog details</li>
      </ul>

      <p>
        Instead of using a database initially, I started with in-memory
        storage to focus on logic first.
      </p>

      <pre><code>
await fetch("/api/blogs", {
  method: "POST",
  body: JSON.stringify({ title, content })
})
      </code></pre>

      <p>
        This project strengthened my understanding of API calls
        and dynamic routing in Next.js.
      </p>
    `,
    createdAt: new Date(),
  },

  {
    id: "5",
    title: "Improving Content Creation with TipTap Editor",
    author: "Sanu",
    content: `
      <h1>Improving Content Creation with TipTap Editor</h1>

      <p>
        A simple textarea is not enough when building a blog platform.
        That’s why I integrated TipTap as a rich text editor.
      </p>

      <h2>Formatting Features Added</h2>
      <ul>
        <li>Bold and italic text</li>
        <li>Multiple heading levels</li>
        <li>Bullet and numbered lists</li>
        <li>Blockquotes</li>
        <li>Code blocks for developers</li>
      </ul>

      <p>
        The editor stores content in HTML format, which is then rendered
        using <code>dangerouslySetInnerHTML</code>.
      </p>

      <blockquote>
        A good writing experience makes content creation enjoyable.
      </blockquote>

      <p>
        Adding a rich text editor made this project feel more
        like a real-world blogging platform.
      </p>
    `,
    createdAt: new Date(),
  }
]

export async function GET() {
  return Response.json(blogs)
}

// export async function POST(req) {
//   const body = await req.json()

//   const newBlog = {
//     // id: Date.now().toString(),
//     // ...body,
//     createdAt: new Date(),
//   }

//   blogs.push(newBlog)

//   return Response.json(newBlog)
// }
export async function POST(req) {
  const body = await req.json()

  const newBlog = {
    id: body.lastid.toString(),
    title: body.title,
    author: body.author,
    content: body.content,
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