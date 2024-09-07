import React from 'react'

const Footer = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <footer className="h-20 flex justify-between items-center">
                <div className="text-sm md:text-base">© 2024 Curiou Savant. All rights reserved.</div>
                <div>
                    <a href="https://github.com/CuriousSavant" className="hover:underline">GitHub</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer