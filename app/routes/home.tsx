import type { Route } from "./+types/home";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
	return [
		{ title: "Home | SMM INDUSTRIAL SOLUTIONS SMC PVT" },
		{ name: "description", content: "Mechanical Engineering Services and Industrial Supplies" },
	];
}

const staggerContainer = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2
		}
	}
};

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
	return (
		<div className="min-h-screen bg-white text-gray-900">
			{/* Hero Section */}
			<section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<img
						src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
						alt="Industrial machinery"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gray-900/70"></div>
				</div>

				<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
							SMM INDUSTRIAL SOLUTIONS <br />
							<span className="text-blue-500 text-3xl md:text-5xl">SMC PVT</span>
						</h1>
						<p className="text-xl md:text-2xl text-gray-200 mb-8 font-light">
							We Provide High Quality, Cost-effective Mechanical Products Customized to Meet Specific Customer Requirements.
						</p>
						<div className="flex gap-4 justify-center">
							<a href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-all">
								About Us
							</a>
							<a href="/contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-md font-semibold transition-all">
								Contact Us
							</a>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Intro Section */}
			<section className="py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
					>
						<motion.div variants={fadeInUp}>
							<h2 className="text-3xl font-bold mb-6 text-blue-600">Company Overview</h2>
							<p className="text-lg text-gray-700 mb-4 leading-relaxed">
								SMM industrial solutions smc pvt - (YES) is a company specializing in Mechanical Engineering Services and Industrial Supplies in all types of industries, FMCG.
							</p>
							<p className="text-lg text-gray-700 leading-relaxed">
								Committed to its founding values of <strong>Quality, Honesty, Professional Commitment and Hard Work</strong>. We build strong, long-term customer relationships by focusing on deliverables that matter.
							</p>
						</motion.div>
						<motion.div variants={fadeInUp} className="relative rounded-xl overflow-hidden shadow-2xl h-80">
							<img
								src="https://images.unsplash.com/photo-1542451313-0cebc71fc555?auto=format&fit=crop&q=80"
								alt="Engineering Work"
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Services Grid Section */}
			<section className="py-20 bg-gray-50 px-4">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
						<div className="w-24 h-1 bg-blue-600 mx-auto"></div>
					</div>

					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, margin: "-100px" }}
						variants={staggerContainer}
						className="grid grid-cols-1 md:grid-cols-3 gap-8"
					>
						{[
							{
								title: "Conveyors & Trolleys",
								desc: "All types of conveyers, carriage trollies, mesh conveyors.",
								img: "https://images.unsplash.com/photo-1563725547-817ab418182b?auto=format&fit=crop&q=80"
							},
							{
								title: "Mechanical Parts",
								desc: "Shafts, roller, gears, sprockets, chains, cams, O-ring, Teflon guide.",
								img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
							},
							{
								title: "Machinery Maintenance",
								desc: "All types of industrial machinery maintenance CBM, TBM, RTF, CM, IM, PDM.",
								img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80"
							}
						].map((item, index) => (
							<motion.div key={index} variants={fadeInUp} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
								<div className="h-48 overflow-hidden">
									<img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-3">{item.title}</h3>
									<p className="text-gray-600">{item.desc}</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Machinery List */}
			<section className="py-20 px-4 text-white bg-gray-900">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						variants={fadeInUp}
						className="text-center"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-400">Available Machinery & Tools</h2>
						<p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
							We have a well-equipped workshop to handle all local and international inquiries regarding mechanical engineering and manufacturing.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-4xl mx-auto bg-gray-800 p-8 rounded-xl shadow-inner border border-gray-700">
							<ul className="space-y-4">
								<li className="flex items-center space-x-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
									<span className="text-gray-200">CNC lathe, milling machines</span>
								</li>
								<li className="flex items-center space-x-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
									<span className="text-gray-200">CNC laser Cutting machine</span>
								</li>
								<li className="flex items-center space-x-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
									<span className="text-gray-200">Conventional lathe machines</span>
								</li>
							</ul>
							<ul className="space-y-4">
								<li className="flex items-center space-x-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
									<span className="text-gray-200">Milling and Hobbing, Machine for gears</span>
								</li>
								<li className="flex items-center space-x-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
									<span className="text-gray-200">Shaper machines</span>
								</li>
								<li className="flex items-center space-x-3">
									<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
									<span className="text-gray-200">Welding & Hard chroming facility</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}
