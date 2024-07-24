"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Image
            src="/Images/alexi_s_learning_app_logo-removebg-preview.png"
            width={50}
            height={50}
            alt="Logo "
          />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/math" className="text-violet hover:text-gray-400">
            Math
          </Link>
          <Link href="/reading" className="text-violet hover:text-gray-400">
            Reading
          </Link>
          <Link href="/general" className="text-violet hover:text-gray-400">
            General Knowlegde
          </Link>
          <Link href="/profile" className="text-violet hover:text-gray-400 rounded-full">
            <Image
              src="/Images/alex-profile-new.jpeg"
              width={50}
              height={50}
              alt=""
              className='rounded-full w-12 h-12 border-solid outline-purple border-2'
            />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-violet focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <Link href="/math" className="block text-violet hover:bg-purple-700 p-2">
            Math
          </Link>
          <Link href="/reading" className="block text-violet hover:bg-purple-700 p-2">
            Reading
          </Link>
          <Link href="/general" className="block text-violet hover:bg-purple-700 p-2">
            General Knowledge
          </Link>
          <Link href="/profile" className="block text-violet">
            <Image
                src="/Images/alex-profile-new.jpeg"
                width={50}
                height={50}
                alt="Alexi's profile Image"
                className="rounded-full w-12 h-12 border-solid outline-purple border-2"
              />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



