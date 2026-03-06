"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

export default function GetInvolved() {
    return (
        <>
            {/* ===== PAGE HERO ===== */}
            <div className="relative bg-gradient-to-br from-green-deep to-green-mid pb-20 pt-[140px] md:pt-[160px] text-center text-white sm:-mt-[84px] -mt-[72px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-home.png')] opacity-[0.05] mix-blend-overlay object-cover"></div>
                <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-yellow-sun/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase bg-yellow-sun/20 backdrop-blur-md text-yellow-sun px-4 py-1.5 rounded-full mb-4 border border-yellow-sun/30 shadow-[0_0_15px_rgba(245,197,24,0.15)]">
                            Take Action
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-white mt-1 mb-4 text-4xl md:text-5xl lg:text-6xl drop-shadow-md">Fuel the Transformation</motion.h1>
                        <motion.p variants={fadeUp} className="text-white/90 text-lg md:text-xl max-w-[620px] mx-auto mt-2 font-medium">
                            Your support financial, material, or physical directly creates the cleaner, greener, more beautiful
                            Sarbo Sweaken City we are building together.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <section className="py-20 md:py-28 bg-off-white relative" id="donate">
                <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-green-pale/40 rounded-full blur-[100px] -z-0 translate-x-1/2 pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* LEFT: Financial Support */}
                        <div className="lg:w-1/2 space-y-16">
                            {/* Financial Donations */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={staggerContainer}
                                className="text-center md:text-left"
                            >
                                <motion.span variants={fadeUp} className="text-sm font-bold tracking-widest uppercase text-green-mid mb-2 block">Financial Support</motion.span>
                                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-charcoal mb-6 font-bold">Make a Monetary Donation</motion.h2>
                                <motion.p variants={fadeUp} className="text-charcoal/70 text-[1.05rem] mb-10 leading-relaxed font-medium">
                                    Financial contributions are the lifeblood of KSSCB Inc.'s operations. Every dollar is
                                    tracked transparently and goes directly toward materials, signs, supplies, and
                                    volunteer workforce support.
                                </motion.p>

                                {/* Impact Tiers */}
                                <motion.h4 variants={fadeUp} className="text-charcoal mb-4 text-lg font-bold">Choose Your Impact Level</motion.h4>
                                <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { amount: "$25", impact: "🌱 Funds 10 tree seedlings for a city block" },
                                        { amount: "$50", impact: "🪧 Buys materials for one new street sign" },
                                        { amount: "$100", impact: "🎨 Provides paint to beautify a home façade" },
                                        { amount: "$250", impact: "🗑️ Funds 5 garbage bins for intersections" },
                                        { amount: "$500", impact: "🌳 Plants a complete curbside green corridor" },
                                        { amount: "$1,000+", impact: "🏅 Founding Donor City-wide recognition" },
                                    ].map((tier, i) => (
                                        <motion.div
                                            key={i}
                                            variants={fadeUp}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(26,92,56,0.08)] hover:border-green-pale transition-all duration-300 flex flex-col items-center md:items-start text-center md:text-left cursor-default"
                                        >
                                            <span className="block text-2xl font-black text-green-deep mb-2">{tier.amount}</span>
                                            <span className="block text-[0.85rem] text-charcoal/80 leading-snug font-medium">{tier.impact}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Custom Amount */}
                                <motion.div
                                    variants={fadeUp}
                                    className="mt-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(26,92,56,0.08)] hover:border-green-pale transition-all duration-300 flex flex-col sm:flex-row items-center gap-4"
                                >
                                    <div className="flex-1 w-full relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/50 font-bold text-xl">$</span>
                                        <input
                                            type="number"
                                            className="w-full pl-8 pr-4 py-3 bg-off-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-mid/50 focus:border-green-mid transition-all font-bold text-lg text-charcoal placeholder:font-normal placeholder:text-base placeholder:text-charcoal/40"
                                            placeholder="Custom Amount"
                                            min="1"
                                        />
                                    </div>
                                    <div className="flex-1 text-[0.85rem] text-charcoal/80 leading-snug font-medium text-center sm:text-left">
                                        🤝 Every contribution counts. Enter a custom amount to support our mission.
                                    </div>
                                </motion.div>

                                {/* Donation CTA */}
                                <motion.div variants={fadeUp} className="mt-12 p-8 bg-white/60 backdrop-blur-md rounded-[2rem] border border-green-pale/50 text-center shadow-xl shadow-green-deep/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-sun/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                    <h3 className="text-charcoal mb-2 text-2xl font-bold">Ready to Donate?</h3>
                                    <p className="text-charcoal/70 mb-8 max-w-[400px] mx-auto text-[0.95rem]">Contact us directly to arrange your secure donation and receive transfer details and a receipt.</p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                            <a href="mailto:ksscbinc@gmail.com?subject=Donation%20Inquiry"
                                                className="btn btn-primary btn-lg shadow-lg shadow-green-deep/20 w-full px-8">💛 Email to Donate</a>
                                        </motion.div>
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                            <Link href="/contact" className="btn btn-outline-dark btn-lg border-charcoal/20 hover:bg-black/5 w-full px-8">Contact Us First</Link>
                                        </motion.div>
                                    </div>
                                    <p className="text-[0.75rem] text-charcoal/50 mt-6 m-0 font-medium">All donations are tracked transparently. Receipts provided.</p>
                                </motion.div>
                            </motion.div>

                            {/* Volunteer Section */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={staggerContainer}
                                className="text-center md:text-left"
                                id="volunteer"
                            >
                                <motion.span variants={fadeUp} className="text-sm font-bold tracking-widest uppercase text-yellow-sun mb-2 block">Get Hands-On</motion.span>
                                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-charcoal mb-6 font-bold">Volunteer Your Time</motion.h2>
                                <motion.p variants={fadeUp} className="text-charcoal/70 text-[1.05rem] mb-8 leading-relaxed font-medium">
                                    Local volunteers are the backbone of everything we do in the field. If you live in or near
                                    Sarbo Sweaken City and want to make a direct impact, we want to hear from you.
                                </motion.p>
                                <motion.div variants={staggerContainer} className="flex flex-col gap-3 mb-8">
                                    {[
                                        { icon: "🌱", text: "Tree planting and nursery maintenance" },
                                        { icon: "🎨", text: "Community painting days" },
                                        { icon: "🪧", text: "Street sign installation teams" },
                                        { icon: "🗑️", text: "Sanitation bin placement & bag distribution" },
                                        { icon: "📋", text: "Community outreach & awareness campaigns" },
                                    ].map((item, i) => (
                                        <motion.div key={i} variants={fadeUp} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white p-4 rounded-[1.25rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="w-12 h-12 rounded-full bg-green-pale/50 flex items-center justify-center text-xl shrink-0 shadow-sm text-green-deep">{item.icon}</div>
                                            <div className="flex items-center h-full sm:mt-2">
                                                <span className="font-medium text-charcoal/90 text-center sm:text-left">{item.text}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <motion.div variants={fadeUp}>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                        <Link href="/contact" className="btn btn-primary shadow-lg shadow-green-deep/20 px-8">Sign Up to Volunteer →</Link>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* RIGHT: Wishlist & Info */}
                        <div className="lg:w-1/2 space-y-16">
                            {/* Wishlist */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={staggerContainer}
                                className="text-center md:text-left"
                                id="wishlist"
                            >
                                <motion.span variants={fadeUp} className="text-sm font-bold tracking-widest uppercase text-green-mid mb-2 block">Direct Giving</motion.span>
                                <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-charcoal mb-6 font-bold">The Material Wishlist</motion.h2>
                                <motion.p variants={fadeUp} className="text-charcoal/70 text-[1.05rem] mb-10 leading-relaxed font-medium">
                                    Can't send money? Send materials! These are the physical items KSSCB Inc. urgently needs.
                                    Sourcing and shipping these items to Sarbo Sweaken City is a tangible act of love.
                                </motion.p>

                                <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        { icon: "🎨", title: "Exterior Paint", text: "For home painting and sign faces." },
                                        { icon: "🪵", title: "Wood & Metal", text: "For durable street sign posts." },
                                        { icon: "🗑️", title: "Garbage Bins", text: "Heavy-duty outdoor public bins." },
                                        { icon: "🛍️", title: "Trash Bags", text: "Heavy-duty for waste distribution." },
                                        { icon: "🌱", title: "Tree Seedlings", text: "Acacia Melanoxylon & tropicals." },
                                        { icon: "🔧", title: "Garden Tools", text: "Hoes, shovels, watering cans." },
                                        { icon: "🖌️", title: "Paint Supplies", text: "Brushes & rollers for homes." },
                                        { icon: "🏷️", title: "Sign Hardware", text: "Bolts & brackets for street signs." },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            variants={fadeUp}
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-lg transition-all flex flex-col items-center md:items-start text-center md:text-left"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-off-white flex items-center justify-center text-xl mb-3 shadow-sm border border-gray-100">
                                                {item.icon}
                                            </div>
                                            <h4 className="text-[1rem] font-bold text-charcoal mb-1">{item.title}</h4>
                                            <p className="text-[0.85rem] text-charcoal/70 leading-snug m-0">{item.text}</p>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div variants={fadeUp} className="mt-8 p-6 bg-green-pale/50 backdrop-blur-sm shadow-sm rounded-2xl border border-green-pale text-[0.95rem] text-charcoal/80 font-medium">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                                        <div className="text-3xl text-green-deep">📦</div>
                                        <div>
                                            <strong className="block text-charcoal mb-1 text-lg">To donate materials:</strong>
                                            Contact us at <a href="mailto:ksscbinc@gmail.com" className="text-green-deep font-bold hover:text-green-mid underline decoration-green-pale underline-offset-4">ksscbinc@gmail.com</a><br className="hidden sm:block" />
                                            or call <strong className="text-charcoal whitespace-nowrap">011-231-088-620-7513</strong> to arrange logistics.
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Spread the Word */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={staggerContainer}
                                className="mt-12 p-10 bg-charcoal rounded-[2.5rem] text-white text-center shadow-2xl relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-sun/10 rounded-full blur-3xl"></div>

                                <motion.div variants={fadeUp} className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 border border-white/10 shadow-inner">📣</motion.div>
                                <motion.h3 variants={fadeUp} className="text-white mb-4 text-3xl font-bold">Spread the Word</motion.h3>
                                <motion.p variants={fadeUp} className="text-white/70 text-[1rem] mb-8 max-w-[350px] mx-auto leading-relaxed">
                                    Even if you can't give right now, sharing our mission with one person who can is priceless.
                                </motion.p>
                                <motion.div variants={fadeUp}>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                        <a href="mailto:?subject=Help%20Transform%20Sarbo%20Sweaken%20City%2C%20Liberia&body=Hi!%0A%0AI%20wanted%20to%20share%20this%20amazing%20NGO%20working%20to%20clean%20and%20beautify%20Sarbo%20Sweaken%20City%20in%20Liberia.%20Check%20them%20out!%0A%0Aksscbinc@gmail.com"
                                            className="btn btn-primary border-none shadow-lg shadow-green-deep/30 px-8 text-black bg-yellow-sun hover:bg-yellow-warm transition-colors">📧 Share via Email</a>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ===== CTA BANNER ===== */}
            <section className="py-24 md:py-32 bg-yellow-sun text-center px-4 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] bg-white/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="w-full max-w-[800px] mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeUp} className="text-charcoal mt-2 mb-6 text-4xl md:text-5xl font-extrabold max-w-[600px] mx-auto leading-tight">Every act of support leaves a mark.</motion.h2>
                        <motion.p variants={fadeUp} className="text-charcoal/70 text-lg md:text-xl mb-12 font-medium max-w-[600px] mx-auto leading-relaxed">Whether you give $25 or $2,500 whether you plant a tree or build a sign you are part of the story of a city transforming itself.</motion.p>
                        <motion.div variants={fadeUp}>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                <Link href="/contact" className="btn btn-primary btn-lg shadow-xl shadow-green-deep/20 px-10">Get in Touch with Us →</Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
