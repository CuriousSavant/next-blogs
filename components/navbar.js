import React from 'react'
import Link from "next/link";

const linkContent = [
    { title: 'About', href: '#' },
    { title: 'Articles', href: '#' },
]

const Navbar = () => {
    return (
        <>
            <nav className="max-w-5xl mx-auto h-20 w-full flex justify-between px-4 md:p-0">
                <div className="font-bold content-center">
                    <button
                    onClick={() => window.location.href = '/'}
                        className="text-xl flex space-x-2"
                    >
                        C-S Blogs
                    </button>
                </div>
                <div className="flex space-x-4 text-base">
                    {linkContent.map((link, index) => (
                        <Link href={link.href} className="content-center hover:underline">{link.title}</Link>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navbar;