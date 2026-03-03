import type { Route } from "./+types/about";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Us | SMM INDUSTRIAL SOLUTIONS" },
        { name: "description", content: "About Managing Director Saad Waqas and SMM Industrial Solutions SMC PVT" },
    ];
}

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 pt-16">
            {/* Header */}
            <section className="bg-blue-600 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        About Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl max-w-3xl mx-auto text-blue-100"
                    >
                        SMM INDUSTRIAL SOLUTIONS SMC PVT - (YES) is an industry leader in Mechanical Engineering Services and Industrial Supplies.
                    </motion.p>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="relative rounded-2xl overflow-hidden shadow-2xl h-96 group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                                alt="MD Portrait"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 pb-4">
                                <h3 className="text-2xl font-bold text-white">Saad Waqas</h3>
                                <p className="text-blue-300">Managing Director</p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-gray-900 border-l-4 border-blue-600 pl-4">
                                Message from the Director
                            </h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                    "Myself, <strong>Saad Waqas</strong>, the Managing Director of SMM INDUSTRIAL SOLUTIONS SMC PVT. With 15 years of experience in R&D and local parts development."
                                </p>
                                <p>
                                    "We are running a mechanical manufacturing company and developing Industrial Mechanical parts specializing in all types of conveyors. If anyone wants to develop Industrial Mechanical parts, you can contact me."
                                </p>
                                <p className="font-semibold text-gray-800 border-t pt-4 mt-4">
                                    We also deal in scheduled mechanical production work as urgent requirements.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values & Production */}
            <section className="py-20 bg-white px-4 border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-gray-900">What We Build</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">⚡</div>
                            <h3 className="text-xl font-bold mb-3">Custom Deliverables</h3>
                            <p className="text-gray-600">
                                Fabrication, welding works, piping, structured mechanical production, and general order supplies to suit your exact operational needs.
                            </p>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">⚙️</div>
                            <h3 className="text-xl font-bold mb-3">Teflon & Mesh</h3>
                            <p className="text-gray-600">
                                Mesh conveyors, pulleys, Teflon machine parts. We work on all types of materials and grades as per custom requirements.
                            </p>
                        </motion.div>

                        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeInUp} className="p-8 bg-gray-50 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6 text-2xl">🛡️</div>
                            <h3 className="text-xl font-bold mb-3">Commitment</h3>
                            <p className="text-gray-600">
                                Our commitment to clients is supported by comprehensive technical support, responsive after-sales service, and a well-stocked inventory for immediate needs.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
