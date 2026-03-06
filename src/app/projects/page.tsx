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

export default function Projects() {
    return (
        <>
            {/* ===== PAGE HERO ===== */}
            <div className="relative bg-gradient-to-br from-green-deep pb-20 pt-[140px] md:pt-[160px] text-center text-white sm:-mt-[84px] -mt-[72px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-home.png')] opacity-[0.05] mix-blend-overlay object-cover"></div>
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-sun/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase bg-yellow-sun/20 backdrop-blur-md text-yellow-sun px-4 py-1.5 rounded-full mb-4 border border-yellow-sun/30 shadow-[0_0_15px_rgba(245,197,24,0.15)]">
                            Our Work
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-white mt-1 mb-4 text-4xl md:text-5xl lg:text-6xl drop-shadow-md">What We Do</motion.h1>
                        <motion.p variants={fadeUp} className="text-white/90 text-lg md:text-xl max-w-[600px] mx-auto mt-2 font-medium">
                            Eight core objectives. Three powerful pillars. One single purpose: making Sarbo Sweaken City the
                            cleanest and most beautiful city in all of Liberia.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* ===== INTRO ===== */}
            <section className="py-20 md:py-28 bg-off-white relative" id="objectives">
                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="text-center max-w-[800px] mx-auto"
                    >
                        <motion.p variants={fadeUp} className="text-[1.1rem] md:text-[1.2rem] text-charcoal/80 leading-relaxed font-medium">
                            The transformation of Sarbo Sweaken City is organized around <strong className="text-green-deep">8 core objectives</strong> that
                            address the foundational needs of a clean, navigable, and dignified urban environment. These
                            objectives are grouped into three interconnected pillars, each essential to the whole.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-16"
                    >
                        {[
                            "Cultivate an urban tree nursery & distribute seedlings",
                            "Plant flowering shrubs & decorative plants citywide",
                            "Number and paint every home in the city",
                            "Officially name all city streets",
                            "Erect durable street signs throughout the city",
                            "Place garbage bins at strategic intersections",
                            "Distribute heavy-duty trash bags to residents",
                            "Demarcate & identify public institutions & landmarks"
                        ].map((objective, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ scale: 1.03, y: -5 }}
                                className="bg-white p-6 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_35px_rgba(26,92,56,0.08)] border border-gray-100 flex items-start gap-4 transition-all duration-300"
                            >
                                <div className="w-7 h-7 shrink-0 rounded-full bg-green-pale/80 text-green-deep flex items-center justify-center text-sm mt-0.5 border border-green-mid/20 font-bold">✓</div>
                                <div className="text-[0.95rem] font-medium text-charcoal/90 leading-snug">{objective}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== PILLAR 1: URBAN GREENING ===== */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="greening">
                <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-green-pale/30 rounded-full blur-[100px] -z-0 -translate-x-1/2 -translate-y-1/2"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="lg:w-1/3 bg-white/80 backdrop-blur-md lg:sticky lg:top-32 self-start py-4 lg:py-0 text-center md:text-left z-20"
                        >
                            <motion.div variants={fadeUp} className="text-5xl md:text-6xl font-black text-gray-100 mb-2 leading-none">01</motion.div>
                            <motion.div variants={fadeUp} className="text-yellow-sun font-bold uppercase tracking-[0.15em] text-[0.85rem] mb-4">Pillar One</motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-charcoal mb-6 font-bold">Urban Greening & Beautification</motion.h2>
                            <motion.p variants={fadeUp} className="text-charcoal/70 text-[1.05rem] mb-8 leading-relaxed">
                                Transforming the streets and backyards of Sarbo Sweaken City into a living, breathing garden
                                through strategic tree planting and floral beautification.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                    <Link href="/get-involved" className="btn btn-primary shadow-lg shadow-green-deep/20 px-8">
                                        Support This Pillar
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
                        >
                            {[
                                { icon: "🌱", title: "The Acacia Melanoxylon Nursery", desc: "KSSCB Inc. is establishing a dedicated cultivation nursery for Acacia Melanoxylon Blackwood Wattle trees — a species renowned for its beauty, durability, and shade. This nursery will serve as the engine of our urban greening program, producing thousands of seedlings for city-wide distribution." },
                                { icon: "🏡", title: "Citywide Curbside & Backyard Planting", desc: "Every curbside and willing backyard in Sarbo Sweaken City will receive Acacia Melanoxylon seedlings, free of charge. We are working to create a continuous green canopy that provides shade, improves air quality, prevents erosion, and dramatically increases the beauty of every street in the city." },
                                { icon: "🌸", title: "Flowering Plants & Decorative Shrubs", desc: "Beyond trees, KSSCB Inc. is sourcing and distributing a variety of flowering plants and decorative shrubs. These will be planted at city entrances, public spaces, and along major corridors to create a vibrant, colorful, and welcoming environment that residents will be proud of." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-off-white rounded-[2rem] p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center md:text-left">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl mb-6 shadow-sm mx-auto md:mx-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl text-charcoal mb-4 font-bold">{item.title}</h4>
                                    <p className="text-charcoal/70 text-[1rem] m-0 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}

                            <motion.div variants={fadeUp} className="bg-green-pale/30 rounded-[2rem] p-8 md:p-10 border border-green-pale hover:shadow-xl hover:shadow-green-deep/5 transition-all duration-300 text-center md:text-left">
                                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl mb-6 shadow-sm text-green-mid mx-auto md:mx-0">🔧</div>
                                <h4 className="text-xl text-charcoal mb-4 font-bold">What We Need</h4>
                                <p className="text-charcoal/80 text-[1rem] m-0 leading-relaxed">
                                    <strong>Tree seedlings</strong>, gardening tools (hoes, shovels, watering cans), planting bags, organic fertilizer, and <strong>volunteer hands</strong> to help distribute and plant.
                                </p>
                                <Link href="/get-involved#wishlist" className="text-green-deep font-bold hover:text-green-mid inline-flex items-center mt-3 gap-1 group">
                                    See our full wishlist <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== PILLAR 2: INFRASTRUCTURE ===== */}
            <section className="py-20 md:py-32 bg-off-white relative overflow-hidden" id="infrastructure">
                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="lg:w-1/3 bg-off-white/80 backdrop-blur-md lg:sticky lg:top-32 self-start py-4 lg:py-0 text-center md:text-left z-20"
                        >
                            <motion.div variants={fadeUp} className="text-5xl md:text-6xl font-black text-gray-200 mb-2 leading-none">02</motion.div>
                            <motion.div variants={fadeUp} className="text-yellow-sun font-bold uppercase tracking-[0.15em] text-[0.85rem] mb-4">Pillar Two</motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-charcoal mb-6 font-bold">Civic Infrastructure & Navigation</motion.h2>
                            <motion.p variants={fadeUp} className="text-charcoal/70 text-[1.05rem] mb-8 leading-relaxed">
                                Giving Sarbo Sweaken City the navigation infrastructure it deserves — so every home can be
                                found, every street has a name, and every resident can be proud of their address.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                    <Link href="/get-involved" className="btn btn-primary shadow-lg shadow-green-deep/20 px-8">
                                        Support This Pillar
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
                        >
                            {[
                                { icon: "🔢", title: "Home Numbering Program", desc: "Every single home and building in Sarbo Sweaken City will receive an official, permanent address number. This seemingly simple act has profound implications — for mail delivery, emergency services, property registration, and civic identity. Every resident deserves a real address." },
                                { icon: "🎨", title: "Citywide Painting Initiative", desc: "KSSCB Inc. is working to ensure that every public-facing surface in Sarbo Sweaken City is freshly painted and well-maintained. Clean, painted homes and buildings signal civic pride and care. We supply paint and coordinate community painting days to bring this vision to life." },
                                { icon: "🗺️", title: "Official Street Naming", desc: "In partnership with local authorities, KSSCB Inc. is leading the effort to officially name every road and alley in Sarbo Sweaken City. Named streets create a sense of place, support emergency response, and are a fundamental marker of a modern, organized city." },
                                { icon: "🪧", title: "Street Sign Erection", desc: "Once streets are named, they need proper, durable signs. KSSCB Inc. is fabricating and installing professional street signs at every major intersection. This is one of our most resource-intensive goals — and one of the most visually transformative." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center md:text-left">
                                    <div className="w-16 h-16 rounded-2xl bg-off-white flex items-center justify-center text-3xl mb-6 shadow-sm border border-gray-100 mx-auto md:mx-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl text-charcoal mb-4 font-bold">{item.title}</h4>
                                    <p className="text-charcoal/70 text-[1rem] m-0 leading-relaxed">{item.desc}</p>
                                    {i === 3 && (
                                        <p className="mt-3 text-[0.95rem] text-charcoal/90"><strong>Your donation directly funds these signs.</strong></p>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== PILLAR 3: SANITATION ===== */}
            <section className="py-20 md:py-32 bg-white relative overflow-hidden" id="sanitation">
                <div className="absolute top-1/2 right-0 w-[40vw] h-[40vw] bg-yellow-sun/5 rounded-full blur-[100px] -z-0 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="lg:w-1/3 bg-white/80 backdrop-blur-md lg:sticky lg:top-32 self-start py-4 lg:py-0 text-center md:text-left z-20"
                        >
                            <motion.div variants={fadeUp} className="text-5xl md:text-6xl font-black text-gray-100 mb-2 leading-none">03</motion.div>
                            <motion.div variants={fadeUp} className="text-yellow-sun font-bold uppercase tracking-[0.15em] text-[0.85rem] mb-4">Pillar Three</motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl text-charcoal mb-6 font-bold">Sanitation & Historical Preservation</motion.h2>
                            <motion.p variants={fadeUp} className="text-charcoal/70 text-[1.05rem] mb-8 leading-relaxed">
                                A clean city requires systems — and Sarbo Sweaken's history deserves to be seen, acknowledged,
                                and protected for future generations.
                            </motion.p>
                            <motion.div variants={fadeUp}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                    <Link href="/get-involved" className="btn btn-primary shadow-lg shadow-green-deep/20 px-8">
                                        Support This Pillar
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
                        >
                            {[
                                { icon: "🗑️", title: "Strategic Garbage Bin Placement", desc: "KSSCB Inc. is sourcing and placing heavy-duty garbage bins at strategic intersections and high-traffic areas throughout the city. Proper waste containment is the single most effective action to eliminate litter and improve public health outcomes for all Sarbo Sweaken residents." },
                                { icon: "🛍️", title: "Heavy-Duty Trash Bag Distribution", desc: "In addition to bins, we distribute heavy-duty trash bags to households and businesses. This program creates a structured system for waste collection and disposal, complementing the bin placement program to ensure that trash has a place to go at every level of city life." },
                                { icon: "🏫", title: "Public Institution Demarcation", desc: "Schools, hospitals, clinics, churches, and parks in Sarbo Sweaken City will be properly demarcated, marked, and made easily identifiable. Clear identification of public institutions is critical for community navigation, emergency response, and civic dignity." },
                                { icon: "🏛️", title: "Historical Landmark Preservation", desc: "Sarbo Sweaken City has history worth preserving. KSSCB Inc. is identifying and erecting proper identification signs for historical landmarks and sites of cultural significance. These signs tell the story of who we are and where we come from — a story that must not be forgotten." }
                            ].map((item, i) => (
                                <motion.div key={i} variants={fadeUp} className="bg-off-white rounded-[2rem] p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center md:text-left">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl mb-6 shadow-sm mx-auto md:mx-0">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl text-charcoal mb-4 font-bold">{item.title}</h4>
                                    <p className="text-charcoal/70 text-[1rem] m-0 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
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
                        <motion.h2 variants={fadeUp} className="text-charcoal/90 mt-2 mb-6 text-4xl md:text-5xl font-extrabold text-shadow-sm leading-tight">Every project needs resources to succeed.</motion.h2>
                        <motion.p variants={fadeUp} className="text-charcoal/80 text-lg md:text-xl mb-12 font-medium max-w-[600px] mx-auto leading-relaxed">See how you can contribute financially, donate materials, or volunteer your time to bring these projects to life.</motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/get-involved" className="btn btn-primary btn-lg shadow-xl shadow-green-deep/20 w-full text-center block px-10">
                                    💛 Get Involved
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/contact" className="btn btn-outline-dark btn-lg border-charcoal/20 hover:bg-white/50 w-full text-center block px-10">
                                    Ask Us Anything
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
