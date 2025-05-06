import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isGalleryOpen, setGalleryOpen] = useState(false);

    return (
        <nav className="bg-gray-950/90 shadow-md sticky top-0 z-50 " >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                    <img src="/image/logo.png" alt="RSR Aviation Logo" className="h-11 w-auto" />
                </Link>


                {/* Mobile menu toggle */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6 items-center font">
                    <Link to="/" className="text-gray-300 hover:text-green-800">Home</Link>
                    <Link to="/about" className="text-gray-300 hover:text-green-800">About</Link>
                    <Link to="/products" className="text-gray-300 hover:text-green-800">Products</Link>
                    <Link to="/contact" className="text-gray-300 hover:text-green-800">Contact</Link>
                    <Link to="/Charter" className="text-gray-300 hover:text-green-800">CharterBenefits</Link>
                    <Link to="/JetStats" className="text-gray-300 hover:text-green-800">JetStatsSection</Link>
                    <Link to="/Testimonials" className="text-gray-300 hover:text-green-800">Testimonials</Link>

                    {/* Gallery with dropdown */}
                    <div
                        className="relative group"
                        onClick={() => setGalleryOpen(!isGalleryOpen)} // Clickable dropdown
                    >
                        <button className="text-gray-300 hover:text-gray-800">Gallery</button>

                        {/* Animated dropdown with Framer Motion */}
                        <AnimatePresence>
                            {isGalleryOpen && (
                                <motion.div
                                    className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link to="/gallery/nature" className="block px-4 py-2 hover:bg-gray-100">
                                        Nature
                                    </Link>
                                    <Link to="/gallery/interior" className="block px-4 py-2 hover:bg-gray-100">
                                        Interior
                                    </Link>
                                    <Link to="/gallery/airport" className="block px-4 py-2 hover:bg-gray-100">
                                        Airports
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Mobile menu content */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">Home</Link>
                    <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">About</Link>
                    <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">Services</Link>
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">Contact</Link>
                    <Link to="/Charter" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">CharterBenefits</Link>
                    <Link to="/JetStats" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">JetStatsSection</Link>
                    <Link to="/Testimonials" onClick={() => setMobileMenuOpen(false)} className="block text-gray-100">Testimonials</Link>

                    {/* Gallery expandable in mobile */}
                    <div>
                        <button
                            onClick={() => setGalleryOpen(!isGalleryOpen)}
                            className="block text-gray-100 w-full text-left"
                        >
                            Gallery
                        </button>
                        <AnimatePresence>
                            {isGalleryOpen && (
                                <motion.div
                                    className="ml-4 space-y-1"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link
                                        to="/gallery/nature"
                                        onClick={() => {
                                            setGalleryOpen(false);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="block text-gray-100"
                                    >
                                        Nature
                                    </Link>
                                    <Link
                                        to="/gallery/interior"
                                        onClick={() => {
                                            setGalleryOpen(false);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="block text-gray-100"
                                    >
                                        Interior
                                    </Link>
                                    <Link
                                        to="/gallery/airport"
                                        onClick={() => {
                                            setGalleryOpen(false);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="block text-gray-100"
                                    >
                                        Airports
                                    </Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
