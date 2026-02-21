"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import React, { useEffect, useState } from "react"

const Themetoggle = () => {
    const [theme, setTheme] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const savedTheme = localStorage.getItem("theme")
        if (savedTheme === "dark") {
            setTheme(true)
            document.documentElement.classList.add("dark")
        }
    }, [])

    useEffect(() => {
        if (!mounted) return

        if (theme) {
            localStorage.setItem("theme", "dark")
            document.documentElement.classList.add("dark")
        } else {
            localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark")
        }
    }, [theme, mounted])

    if (!mounted) return null

    return (
        <div className="flex">
            <div
                onClick={() => setTheme(!theme)}
                className="w-12 h-7 bg-card rounded-full flex items-center px-1 cursor-pointer transition"
            >
                <div
                    className={`size-5 bg-background rounded-full flex items-center justify-center shadow-md transform transition duration-500 ${theme ? "translate-x-5 rotate-360" : "translate-x-0"
                        }`}
                >
                    {theme ? <MoonIcon size={15} /> : <SunIcon size={15} />}
                </div>
            </div>
        </div>
    )
}

export default Themetoggle