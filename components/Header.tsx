'use client'

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="bg-white p-2 drop-shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4 text-lg font-bold">

                    
                    <a href = "/">
                        <Image
                            src="/logo.png"
                            alt="UP Cebu Dormitory"
                            width={80} // Adjust width as needed
                            height={150} // Adjust height as needed
                        />
                    </a>
                    <h3>UP DORMERS ASSOCIATION</h3>
                </div>
                <div className="space-x-8">
                    
                    <Link href="/about" className="text-focus-visible hover:text-green-500">
                        About
                    </Link>
                    <Link href="/services" className="text-focus-visible hover:text-green-500">
                        Services
                    </Link>
                    <Link href="/contact" className="text-focus-visible hover:text-green-500">
                        Contact
                    </Link>
                    <Link href="/" className="bg-red-800 text-white font-bold py-2 px-4 rounded-full hover:bg-green-800">
                        Apply Now
                    </Link>

                </div>
            </div>
        </nav>
    );
}

