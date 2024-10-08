import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import myImage from '../images/reg44.png'
import Link from 'next/link'
import Image from 'next/image'; // Ensure this import is present
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/">
            <Image src={myImage} alt="Reg44 Consultancy Logo" width={120} height={60} style={{borderRadius: '10px'}}/>
            </Link>
            <nav className="hidden md:block">
              <ul className="flex space-x-8 text-gray-600">
                <li><Link href="/" className="hover:text-orange-500 transition duration-300 relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link></li>
                <li><Link href="/about" className="hover:text-orange-500 transition duration-300 relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link></li>
                <li><Link href="/services" className="hover:text-orange-500 transition duration-300 relative group">
                  Services
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link></li>
                <li><Link href="/contact" className="hover:text-orange-500 transition duration-300 relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
        {children}

        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <Image src={myImage} alt="Reg44 Consultancy Logo" width={120} height={60} className="mb-4" style={{borderRadius: '10px'}}/>
              <p>&copy; 2024 Reg44 Consultancy. Shaping the future of care, today.</p>
            </div>
            <div className="flex flex-col space-y-4">
              <a href="tel:07704427990" className="flex items-center hover:text-orange-300 transition duration-300">
                <PhoneIcon className="h-5 w-5 mr-2" />
                07704427990
              </a>
              <a href="mailto:support@reg44visitor.co.uk" className="flex items-center hover:text-orange-300 transition duration-300">
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                support@reg44visitor.co.uk
              </a>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </html>
  );
}
