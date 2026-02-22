"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import Image from "@tiptap/extension-image";
import { Bold } from "lucide-react";
export default function RichTextEditor({ content, setContent }) {
  const [mounted, setMounted] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isH1, setIsH1] = useState(false);
  const [isH2, setIsH2] = useState(false);
  const [isBullet, setIsBullet] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const [isQuote, setIsQuote] = useState(false);
  const [isCodeBlock, setIsCodeBlock] = useState(false);
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
  console.log(isBold);
  
  if (!mounted || !editor) return null;
  const activeClass = "bg-foreground text-background px-3 py-1 rounded";
  const normalClass = "bg-muted px-3 py-1 rounded";
  return (
    <div className="border rounded h-fit bg-background shadow-sm">
      <div className="flex flex-wrap gap-2 p-3 border-b bg-muted/20">
        <button
          type="button"
          className={isBold?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleBold().run(), setIsBold(!isBold));
          }}
        >
          Bold
        </button>
        <button
          type="button"
          className={isItalic?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleItalic().run(),
              setIsItalic(!isItalic));
          }}
        >
          Italic
        </button>
        <button
          className={normalClass}
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
          className={isH1?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleHeading({ level: 1 }).run(),
              setIsH1(!isH1));
          }}
        >
          H1
        </button>

        <button
          type="button"
          className={isH2?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleHeading({ level: 2 }).run(),
              setIsH2(!isH2));
          }}
        >
          H2
        </button>

        <button
          type="button"
          className={isBullet?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleBulletList().run(),
              setIsBullet(!isBullet));
          }}
        >
          Bullet
        </button>

        <button
          type="button"
          className={isOrdered?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleOrderedList().run(),
              setIsOrdered(!isOrdered));
          }}
        >
          Numbered
        </button>

        <button
          type="button"
          className={isQuote?activeClass:normalClass}
          onClick={() => {
            (editor.chain().focus().toggleBlockquote().run(),
              setIsQuote(!isQuote));
          }}
        >
          Quote
        </button>

        <button
          type="button"
          className={isCodeBlock?activeClass:normalClass}
          onClick={() => {editor.chain().focus().toggleCodeBlock().run(),setIsCodeBlock(!isCodeBlock)}}
        >
          Code
        </button>

        <button
          type="button"
          className={normalClass}
          onClick={() => editor.chain().focus().undo().run()}
        >
          Undo
        </button>

        <button
          className={normalClass}
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
