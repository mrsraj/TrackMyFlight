import { Facebook, Twitter, Instagram, Mail, Linkedin } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 border-t border-gray-700 py-10">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6">
                <div className="flex gap-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition">
                        <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full hover:bg-sky-500 transition">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="mailto:info@alavion.com" aria-label="Email" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>

                <p className="text-sm text-center">
                    <span className="text-white font-semibold">RSR Aviation</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
