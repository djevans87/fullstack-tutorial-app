//src/components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="flex justify-between items-center">
                <div className="text-xl font-bold">Brand</div>

                {/* Hamburger button for mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-2xl"
                >
                    ☰
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </div>

            {/* Mobile menu (only shows when isOpen = true) */}
            {isOpen && (
                <div className="md:hidden mt-2 flex flex-col space-y-2">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            )}
        </nav>
    );
}
