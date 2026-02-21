// "use client"

// import { useEditor, EditorContent } from "@tiptap/react"
// import StarterKit from "@tiptap/starter-kit"
// import { useEffect, useState } from "react"

// export default function RichTextEditor({ content, setContent }) {
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
//   }, [])

//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: content || "",
//     immediatelyRender: false,
//     onUpdate: ({ editor }) => {
//       setContent(editor.getHTML())
//     },
//   })

//   if (!isMounted || !editor) return null

//   return (
//     <div className="border rounded bg-background">
//       <div className="flex gap-2 p-3 border-b bg-foreground/10">

//         <button type="button"
//           className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleBold().run()}>
//           Bold
//         </button>

//         <button type="button"
//           className={editor.isActive("italic") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleItalic().run()}>
//           Italic
//         </button>

//         <button type="button"
//           className={editor.isActive("H1") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
//           H1
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
//           H2
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleBulletList().run()}>
//           Bullet
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleOrderedList().run()}>
//           Numbered
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleBlockquote().run()}>
//           Quote
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().toggleCodeBlock().run()}>
//           Code
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().undo().run()}>
//           Undo
//         </button>

//         <button type="button" className={editor.isActive("bold") ? "bg-blue-500 text-white" : ""}
//           onClick={() => editor.chain().focus().redo().run()}>
//           Redo
//         </button>
//       </div>

//       <div className="p-4 min-h-50">
//         <EditorContent editor={editor} />
//       </div>
//     </div>
//   )
// }

"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import Image from "@tiptap/extension-image";
export default function RichTextEditor({ content, setContent }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: content || "",
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!mounted || !editor) return null;

  const btn = (active) =>
    `px-3 py-1 rounded border text-sm transition ${
      active
        ? "bg-white text-black hover:bg-gray-100"
        : "bg-foreground text-background border-foreground"
    }`;

  return (
    <div className="border rounded bg-background shadow-sm">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b bg-muted/20">
        <button
          type="button"
          className={btn(editor.isActive("bold"))}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>

        <button
          type="button"
          className={btn(editor.isActive("italic"))}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
        <button
          type="button"
          onClick={() => {
            const url = prompt("Enter image URL");
            if (url) {
              editor
                .chain()
                .focus()
                .setImage({ src: url })
                .createParagraphNear()
                .run();
            }
          }}
        >
          Image
        </button>
        <button
          type="button"
          className={btn(editor.isActive("heading", { level: 1 }))}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>

        <button
          type="button"
          className={btn(editor.isActive("heading", { level: 2 }))}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>

        <button
          type="button"
          className={btn(editor.isActive("bulletList"))}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Bullet
        </button>

        <button
          type="button"
          className={btn(editor.isActive("orderedList"))}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Numbered
        </button>

        <button
          type="button"
          className={btn(editor.isActive("blockquote"))}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Quote
        </button>

        <button
          type="button"
          className={btn(editor.isActive("codeBlock"))}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          Code
        </button>

        <button
          type="button"
          className="px-3 py-1 rounded border text-sm bg-background hover:bg-background/70"
          onClick={() => editor.chain().focus().undo().run()}
        >
          Undo
        </button>

        <button
          type="button"
          className="px-3 py-1 rounded border text-sm bg-background hover:bg-background/70"
          onClick={() => editor.chain().focus().redo().run()}
        >
          Redo
        </button>
      </div>
      <div className="p-4 min-h-50">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
