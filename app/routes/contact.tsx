import type { Route } from "./+types/contact";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Us | SMM INDUSTRIAL SOLUTIONS" },
        { name: "description", content: "Contact SMM Industrial Solutions SMC PVT" },
    ];
}

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-white text-gray-900 pt-16">
            {/* Header */}
            <section className="bg-gray-900 text-white py-24 px-4 text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold mb-6"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-400 font-light"
                    >
                        We welcome all your inquiries regarding local and international projects. Looking forward to your positive feedback.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Contact Details */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="space-y-10"
                    >
                        <div>
                            <h2 className="text-3xl font-bold mb-8 text-blue-600 border-b pb-4">Contact Information</h2>
                            <div className="space-y-6 text-lg text-gray-700">
                                <div className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors">
                                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Phone</p>
                                        <p>03321488218</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors">
                                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Email</p>
                                        <p>sw967074@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 hover:bg-gray-50 p-4 rounded-xl transition-colors">
                                    <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Office Address</p>
                                        <p>30 G-A Chaman park, LHR</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Managing Director</h3>
                            <p className="text-blue-600 font-semibold mb-2 text-lg">Saad Waqas</p>
                            <p className="text-gray-600">
                                Reach out directly to discuss customized industrial solutions and large-scale manufacturing requirements.
                            </p>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 hidden md:block"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Send an Inquiry</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-blue-600/30">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
