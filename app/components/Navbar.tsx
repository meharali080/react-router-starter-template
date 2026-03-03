import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            SMM Industrial <span className="text-gray-900 dark:text-white">Solutions</span>
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                            About Us
                        </Link>
                        <Link to="/products" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                            Products
                        </Link>
                        <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                            Contact Us
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                to="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/products"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                Products
                            </Link>
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-900"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
