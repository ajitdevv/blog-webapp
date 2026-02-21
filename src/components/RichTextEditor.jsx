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

  return (
    <div className="border rounded bg-background shadow-sm">
      <div className="flex flex-wrap gap-2 p-3 border-b bg-muted/20">
        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>
        <button
          className="btn"
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
          className="btn"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
        >
          H1
        </button>

        <button
          type="button"
          className="btn"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Bullet
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          Numbered
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          Quote
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          Code
        </button>

        <button
          type="button"
          className="btn"
          onClick={() => editor.chain().focus().undo().run()}
        >
          Undo
        </button>

        <button
          className="btn"
          type="button"
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
