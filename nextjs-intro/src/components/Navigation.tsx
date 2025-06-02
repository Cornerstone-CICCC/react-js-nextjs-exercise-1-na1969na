"use client";

import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="text-white hover:text-gray-300">
          About
        </Link>
        <Link href="/services" className="text-white hover:text-gray-300">
          Services
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-300">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
