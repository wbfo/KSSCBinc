"use client";

import Image from "next/image";
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

export default function About() {
    return (
        <>
            {/* ===== FIXED FLAG BACKGROUND ===== */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/liberia-flag-bg.webp"
                    alt="Flag of Liberia Background"
                    fill
                    className="object-cover opacity-25"
                    priority
                />
            </div>

            {/* ===== PAGE HERO ===== */}
            <div className="relative h-[380px] md:h-[450px] flex items-end overflow-hidden sm:-mt-[84px] -mt-[72px]">
                <Image
                    src="/images/about-header.png"
                    alt="Aerial view of the pristine tropical rainforest and winding river of River Gee County, Liberia"
                    fill
                    className="object-cover object-center absolute inset-0 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/95 via-green-deep/50 to-black/20"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10 py-12 md:py-16">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="w-full text-center md:text-left"
                    >
                        <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4 bg-yellow-sun/20 backdrop-blur-sm text-yellow-sun border border-yellow-sun/30 shadow-[0_0_15px_rgba(245,197,24,0.15)]">
                            Who We Are
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-white mb-3 text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">About KSSCB Inc.</motion.h1>
                        <motion.p variants={fadeUp} className="text-white/90 text-lg md:text-xl max-w-[580px] mx-auto md:mx-0 m-0 drop-shadow-sm font-medium">
                            The story of a community that chose to take its destiny into its own hands.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* ===== OUR STORY ===== */}
            <section className="py-20 md:py-28 bg-white/70 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-green-pale rounded-full blur-[100px] opacity-30 -z-0 translate-x-1/2 -translate-y-1/2"></div>
                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="lg:w-2/3 text-center md:text-left"
                        >
                            <motion.span variants={fadeUp} className="section-label mx-auto md:mx-0">Our Story & Our Home</motion.span>
                            <motion.h2 variants={fadeUp} className="section-title text-3xl md:text-4xl lg:text-5xl mb-8">A Remote Paradise with Unlimited Potential</motion.h2>
                            <div className="space-y-6 text-charcoal/80 text-lg leading-relaxed">
                                <motion.p variants={fadeUp}>
                                    Sarbo Sweaken City sits in the heart of River Gee County one of Liberia's most remote and lush
                                    counties, bordering Ivory Coast in the southeast. Surrounded by incredible rainforest, pristine
                                    rivers, and rich natural resources, River Gee is a place of breathtaking beauty that has long
                                    been underserved by national infrastructure investment.
                                </motion.p>
                                <motion.p variants={fadeUp}>
                                    Like many communities in this remote region, Sarbo Sweaken City has faced the challenge of
                                    building civic dignity without the institutional support that larger cities enjoy. Streets have
                                    long gone unnamed and unsigned. Homes lack official numbers. Public spaces have had no proper
                                    identification. And the environment though naturally stunning has needed organized
                                    caretaking.
                                </motion.p>
                                <motion.div variants={fadeUp} className="p-6 bg-yellow-sun/10 border-l-4 border-yellow-sun rounded-r-2xl my-8">
                                    <p className="m-0 text-charcoal font-medium">
                                        KSSCB Inc. was born from the conviction that <strong>this community does not have to wait for
                                            outside help to start building a better city.</strong> Incorporated on May 21, 2025, our
                                        organization was founded by men who have seen what organized civic effort can do and who are
                                        committed to bringing that transformation home.
                                    </p>
                                </motion.div>
                                <motion.p variants={fadeUp}>
                                    This foundational infrastructure work trees, signs, house numbers, sanitation is not
                                    cosmetic. It is the bedrock of a functioning, dignified community. It affects property values,
                                    public health, emergency response, tourism, and civic pride. This is why we start here, and why
                                    this work is so critical.
                                </motion.p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="lg:w-1/3"
                        >
                            <div className="bg-white/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(26,92,56,0.06)] border border-gray-100 rounded-[2rem] p-8 lg:sticky lg:top-32 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-sun/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                <h4 className="text-xl md:text-2xl font-bold text-green-deep border-b border-gray-100 pb-5 mb-6 flex items-center gap-3">
                                    <span className="text-2xl bg-green-pale w-10 h-10 rounded-full flex items-center justify-center">📍</span> Fast Facts
                                </h4>

                                <div className="space-y-5">
                                    {[
                                        { label: "Organization", value: "KSSCB Inc. (Keep Sarbo Sweaken Clean & Beautiful)" },
                                        { label: "Founded", value: "May 21, 2025" },
                                        { label: "Type", value: "Non-Profit NGO" },
                                        { label: "Location", value: "Sarbo Sweaken City, River Gee County, Liberia 🇱🇷, West Africa" },
                                        { label: "Focus Area", value: "Urban greening, civic infrastructure, sanitation & preservation" },
                                        { label: "Registration", value: "501(c)(3) Equivalent (Pending)" },
                                        { label: "Contact", value: "ksscbinc@gmail.com" }
                                    ].map((fact, i) => (
                                        <div key={i} className="group">
                                            <strong className="block text-charcoal/60 text-[0.75rem] uppercase tracking-[0.15em] mb-1 group-hover:text-green-mid transition-colors">{fact.label}</strong>
                                            <span className="text-charcoal font-medium text-[0.95rem]">{fact.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== MISSION & VISION ===== */}
            <section className="py-20 md:py-32 bg-gradient-to-br from-green-deep to-green-mid text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-home.png')] opacity-[0.03] mix-blend-overlay object-cover"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-yellow-sun/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16 md:mb-20"
                    >
                        <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20 rounded-full mb-5 shadow-sm">
                            Our Purpose
                        </motion.span>
                        <motion.h2 variants={fadeUp} className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-sm">Mission & Vision</motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
                    >
                        <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.12] transition-colors duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-8 shadow-sm backdrop-blur-sm">🎯</div>
                            <h3 className="text-white text-3xl mb-5 font-bold">Our Mission</h3>
                            <p className="text-white/85 leading-relaxed mb-5 text-[1.05rem]">
                                To provide a dignified, sustainable, and wholesome functioning environment for the citizens of
                                Sarbo Sweaken City by cultivating urban greenery, building proper civic infrastructure, ensuring
                                effective sanitation, and preserving the historical and cultural landmarks that define our
                                community's identity.
                            </p>
                            <p className="text-white/85 leading-relaxed m-0 text-[1.05rem]">
                                We achieve this through organized community action, strategic resource mobilization, and
                                unwavering commitment to the well-being and pride of every resident of Sarbo Sweaken City.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeUp} className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-12 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-white/[0.12] transition-colors duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-3xl mb-8 shadow-sm backdrop-blur-sm">🔭</div>
                            <h3 className="text-white text-3xl mb-5 font-bold">Our Vision</h3>
                            <p className="text-white/85 leading-relaxed mb-5 text-[1.05rem]">
                                To see Sarbo Sweaken City recognized as the cleanest, greenest, and most beautifully maintained
                                city in Liberia a model of civic pride and community-driven transformation for all of West
                                Africa.
                            </p>
                            <p className="text-white/85 leading-relaxed m-0 text-[1.05rem]">
                                We envision a city where every street is named and signed, every home is numbered and tended,
                                every corner has a tree providing shade, and every public institution stands as a beacon of
                                order and dignity for generations to come.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== VALUES ===== */}
            <section className="py-20 md:py-32 bg-off-white/70 backdrop-blur-md relative">
                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16 md:mb-20"
                    >
                        <motion.span variants={fadeUp} className="section-label mx-auto">What Guides Us</motion.span>
                        <motion.h2 variants={fadeUp} className="section-title text-4xl md:text-5xl">Our Core Values</motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: "🤝", title: "Community First", desc: "Every decision we make is centered on the well-being of Sarbo Sweaken's residents. We are your neighbors, and this is our shared home." },
                            { icon: "♻️", title: "Sustainability", desc: "We plant for the next generation. Every tree, every sign, every painted home is built to last and to be maintained by the community." },
                            { icon: "🏛️", title: "Accountability", desc: "We hold ourselves to the highest standard of transparency. Every dollar donated is tracked and put directly toward the objectives we've committed to." }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                className="bg-white/80 backdrop-blur-sm rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,92,56,0.1)] p-10 text-center transition-shadow duration-300 border border-white/50"
                            >
                                <div className="w-[80px] h-[80px] bg-green-pale/50 rounded-2xl flex items-center justify-center text-4xl mb-8 mx-auto shadow-[0_4px_10px_rgba(0,0,0,0.05)] border border-white">
                                    {val.icon}
                                </div>
                                <h3 className="text-charcoal mb-4 text-2xl font-bold">{val.title}</h3>
                                <p className="text-charcoal/70 text-[1.05rem] leading-relaxed m-0">{val.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== LEADERSHIP ===== */}
            <section className="py-20 md:py-32 bg-white/70 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-yellow-sun/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center mb-16 md:mb-24 text-center md:text-left mx-auto max-w-[800px]"
                    >
                        <motion.span variants={fadeUp} className="section-label mx-auto">The Team</motion.span>
                        <motion.h2 variants={fadeUp} className="section-title text-4xl md:text-5xl text-center">Our Leadership</motion.h2>
                        <motion.p variants={fadeUp} className="section-subtitle mx-auto text-center text-lg md:text-xl">Meet the founders who are turning a vision into reality people who love Sarbo Sweaken City and are giving their energy to see it transformed.</motion.p>
                    </motion.div>

                    <div className="max-w-[850px] mx-auto">
                        {[
                            { num: "1", name: "Rev. Thomas Johnson", role: "Primary Founder - Executive Director", desc: "Based in the United States, Rev. Johnson brings the strategic vision and moral leadership necessary to guide KSSCB Inc. He coordinates our international efforts and maintains the organization's commitment to transforming Sarbo Sweaken City into a model of civic pride." },
                            { num: "2", name: "Franklin Ilehka Tuareh", role: "Co-Founder", desc: "As a key founder, Franklin plays a vital role in the organization's direction and development. His commitment to the mission of KSSCB Inc. is driven by a deep desire to see Sarbo Sweaken City thrive through organized civic effort and community-led beautification projects." },
                            { num: "3", name: "Patrick C Kumeh", role: "Secretary", desc: "Serving on the ground in Liberia, Patrick is a committed community leader who manages the daily operations and executes the mission of KSSCB Inc. His local knowledge and tireless work on the ground are invaluable to our hands-on mission in Sarbo Sweaken City." }
                        ].map((leader, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                whileHover={{ scale: 1.02 }}
                                className="flex flex-col sm:flex-row gap-6 sm:gap-10 bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,92,56,0.08)] border border-white/50 mb-8 transition-all duration-300 relative overflow-hidden group text-center md:text-left"
                            >
                                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-mid to-yellow-sun opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="w-16 h-16 shrink-0 rounded-[1.2rem] bg-green-pale/50 text-green-deep flex items-center justify-center text-3xl font-extrabold font-serif opacity-90 mx-auto md:mx-0 shadow-sm border border-white">
                                    {leader.num}
                                </div>
                                <div className="mt-2 md:mt-0">
                                    <h3 className="text-2xl md:text-3xl text-charcoal mb-2 font-bold">{leader.name}</h3>
                                    <div className="text-yellow-sun font-bold uppercase tracking-widest text-[0.75rem] mb-5 bg-yellow-sun/10 inline-block px-3 py-1 rounded-full border border-yellow-sun/20">{leader.role}</div>
                                    <p className="text-charcoal/70 mb-0 leading-relaxed text-[1.05rem]">
                                        {leader.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== JOIN CTA ===== */}
            <section className="py-24 md:py-32 bg-gradient-to-br from-yellow-sun via-yellow-sun to-yellow-warm text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-home.png')] opacity-[0.03] mix-blend-overlay object-cover"></div>
                <div className="w-full max-w-[800px] mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_rgba(245,197,24,0.3)]"
                    >
                        <motion.h2 variants={fadeUp} className="text-charcoal/90 mt-2 mb-6 text-4xl md:text-5xl font-extrabold text-shadow-sm leading-tight">Ready to be part of the transformation?</motion.h2>
                        <motion.p variants={fadeUp} className="text-charcoal/80 text-lg md:text-xl mb-12 font-medium max-w-[600px] mx-auto leading-relaxed">Whether you're donating, volunteering, or simply spreading the word your support makes a measurable difference in Sarbo Sweaken City.</motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/get-involved" className="btn btn-primary btn-lg shadow-xl shadow-green-deep/20 w-full text-center block px-10">
                                    💛 Get Involved
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/projects" className="btn btn-outline-dark btn-lg border-charcoal/20 hover:bg-white/50 w-full text-center block px-10">
                                    See Our Work →
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="relative w-full h-[400px] md:h-[500px] bg-charcoal" id="map">
                <iframe
                    src="https://maps.google.com/maps?q=Sarbo%20Sweaken,%20Liberia&t=m&z=9&ie=UTF8&iwloc=A&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(15%) contrast(1.1)' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Map of Sarbo Sweaken, Liberia"
                ></iframe>
            </section>
        </>
    );
}
