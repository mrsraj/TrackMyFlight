import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [isAboutOpen, setAboutOpen] = useState(false);
    const [isProductsOpen, setProductsOpen] = useState(false);

    return (
        <nav className="bg-gray-950/90 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                    <img src="/image/logo.png" alt="RSR Aviation Logo" className="h-11 w-auto" />
                </Link>

                {/* Mobile toggle button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop menu */}
                <div className="hidden md:flex space-x-6 items-center font">
                    <Link to="/" className="text-gray-300 hover:text-green-800">Home</Link>

                    {/* About Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-gray-300 hover:text-green-800">
                            About <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isAboutOpen && (
                                <motion.div
                                    className="absolute top-full mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
                                    <Link to="/testimonials" className="block px-4 py-2 hover:bg-gray-100">Testimonials</Link>
                                    <Link to="/teamSection" className="block px-4 py-2 hover:bg-gray-100">Team</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Products Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setProductsOpen(true)}
                        onMouseLeave={() => setProductsOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-gray-300 hover:text-green-800">
                            Products <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isProductsOpen && (
                                <motion.div
                                    className="absolute top-full mt-2 w-48 bg-white shadow-md rounded-md py-2 z-50"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link to="/products" className="block px-4 py-2 hover:bg-gray-100">All Products</Link>
                                    <Link to="/shop" className="block px-4 py-2 hover:bg-gray-100">Shop</Link>
                                    <Link to="/cart" className="block px-4 py-2 hover:bg-gray-100">Cart</Link>
                                    <Link to="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</Link>
                                    <Link to="/account" className="block px-4 py-2 hover:bg-gray-100">My Account</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/contact" className="text-gray-300 hover:text-green-800">Contact</Link>
                    <Link to="/Charter" className="text-gray-300 hover:text-green-800">CharterBenefits</Link>
                    {/* <Link to="/JetStats" className="text-gray-300 hover:text-green-800">JetStatsSection</Link> */}

                    {/* Gallery Dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setGalleryOpen(true)}
                        onMouseLeave={() => setGalleryOpen(false)}
                    >
                        <button className="flex items-center gap-1 text-gray-300 hover:text-green-800">
                            Gallery <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isGalleryOpen && (
                                <motion.div
                                    className="absolute top-full mt-2 w-40 bg-white shadow-md rounded-md py-2 z-50"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Link to="/gallery/nature" className="block px-4 py-2 hover:bg-gray-100">Nature</Link>
                                    <Link to="/gallery/interior" className="block px-4 py-2 hover:bg-gray-100">Interior</Link>
                                    <Link to="/gallery/airport" className="block px-4 py-2 hover:bg-gray-100">Airports</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2 text-gray-100">
                    <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>

                    {/* About Dropdown */}
                    <div>
                        <button
                            onClick={() => setAboutOpen(!isAboutOpen)}
                            className="flex items-center gap-1 w-full text-left"
                        >
                            About <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isAboutOpen && (
                                <motion.div
                                    className="ml-4 space-y-1"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                                    <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
                                    <Link to="/teamSection" onClick={() => setMobileMenuOpen(false)}>Team</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Products Dropdown */}
                    <div>
                        <button
                            onClick={() => setProductsOpen(!isProductsOpen)}
                            className="flex items-center gap-1 w-full text-left"
                        >
                            Products <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isProductsOpen && (
                                <motion.div
                                    className="ml-4 space-y-1"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link to="/products" onClick={() => setMobileMenuOpen(false)}>All Products</Link>
                                    <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
                                    <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
                                    <Link to="/checkout" onClick={() => setMobileMenuOpen(false)}>Checkout</Link>
                                    <Link to="/account" onClick={() => setMobileMenuOpen(false)}>My Account</Link>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                    <Link to="/Charter" onClick={() => setMobileMenuOpen(false)}>CharterBenefits</Link>
                    {/* <Link to="/JetStats" onClick={() => setMobileMenuOpen(false)}>JetStatsSection</Link> */}

                    {/* Gallery Dropdown */}
                    <div>
                        <button
                            onClick={() => setGalleryOpen(!isGalleryOpen)}
                            className="flex items-center gap-1 w-full text-left"
                        >
                            Gallery <ChevronDown size={16} />
                        </button>
                        <AnimatePresence>
                            {isGalleryOpen && (
                                <motion.div
                                    className="ml-4 space-y-1"
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link to="/gallery/nature" onClick={() => setMobileMenuOpen(false)}>Nature</Link>
                                    <Link to="/gallery/interior" onClick={() => setMobileMenuOpen(false)}>Interior</Link>
                                    <Link to="/gallery/airport" onClick={() => setMobileMenuOpen(false)}>Airports</Link>
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
