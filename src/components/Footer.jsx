"use client"

import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-16 border-t bg-background">
            <div className="max-w-6xl mx-auto px-6 py-10 items-center justify-center flex flex-col sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div  className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold">AJ Blog</h2>
                    <p className="text-sm text-muted mt-2">
                        A modern blog platform built with Next.js, API routes,
                        and a rich text editor.
                    </p>
                </div>

                {/* Quick Links */}
                <div  className="flex flex-col items-center md:items-start">
                    <h3 className="font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm text-muted flex flex-col items-center md:items-start">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/create">Create Blog</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>

                {/* Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="font-semibold mb-3">About</h3>
                    <p className="text-sm text-muted">
                        Built using Next.js App Router, SSR, API Routes and TipTap.
                    </p>
                </div>

            </div>

            <div className="text-center text-sm text-muted border-t py-4">
                © {new Date().getFullYear()} AJ Blog. All rights reserved.
            </div>
        </footer>
    )
}