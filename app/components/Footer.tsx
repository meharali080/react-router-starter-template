export function Footer() {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">SMM INDUSTRIAL SOLUTIONS SMC PVT</h3>
                    <p className="text-gray-400 text-sm">
                        Providing high-quality, cost-effective Mechanical Products customized to meet specific customer requirements in FMCG and all types of industries.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                        <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2 inline-block">Contact Info</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><strong>Phone:</strong> 03321488218</li>
                        <li><strong>Email:</strong> sw967074@gmail.com</li>
                        <li><strong>Address:</strong> 30 G-A Chaman park LHR</li>
                        <li className="pt-2"><strong>Managing Director:</strong> Saad Waqas</li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} SMM INDUSTRIAL SOLUTIONS SMC PVT. All rights reserved.</p>
            </div>
        </footer>
    );
}
