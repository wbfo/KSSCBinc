"use client";

import Image from "next/image";
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

const galleryImages = [
    {
        src: "/images/greening_project_liberia.png",
        alt: "Urban greening project in Liberia",
        title: "Urban Greening Phase 3",
        category: "Infrastructure"
    },
    {
        src: "/images/community_cleanup.png",
        alt: "Community cleanup and beautification",
        title: "Community Cleanup Day",
        category: "Sanitation"
    },
    {
        src: "/images/street_signage.png",
        alt: "New professional street signage",
        title: "Modern Street Signage",
        category: "Civic Tools"
    },
    {
        src: "/images/scenic_liberia.png",
        alt: "Scenic aerial view of River Gee County",
        title: "Preserving Natural Beauty",
        category: "Conservation"
    },
    {
        src: "/images/seedling-nursery.png",
        alt: "Seedling nursery for urban greening",
        title: "Foundational Growth",
        category: "Greening"
    }
];

export default function Gallery() {
    return (
        <div className="min-h-screen bg-white">
            {/* ===== PAGE HERO ===== */}
            <div className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden sm:-mt-[84px] -mt-[72px]">
                <Image
                    src="/images/hero-home.png"
                    alt="KSSCB Inc. Hero"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                <div className="absolute inset-0 bg-green-deep/60 backdrop-blur-[2px]"></div>
                <div className="relative z-10 text-center px-4">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-4 bg-yellow-sun/20 text-yellow-sun border border-yellow-sun/30"
                    >
                        Our Impact
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg"
                    >
                        Work on the Ground
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/90 text-lg md:text-xl max-w-[600px] mx-auto mt-4 font-medium"
                    >
                        Visualizing the transformation of Sarbo Sweaken City, one project at a time.
                    </motion.p>
                </div>
            </div>

            {/* ===== GALLERY GRID ===== */}
            <section className="py-20 md:py-28 bg-off-white/50 backdrop-blur-md">
                <div className="max-w-[1200px] mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                variants={fadeUp}
                                whileHover={{ y: -8 }}
                                className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 bg-white"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="inline-block text-[0.65rem] font-bold uppercase tracking-widest text-yellow-sun mb-2 bg-yellow-sun/10 px-3 py-1 rounded-full border border-yellow-sun/20">
                                            {image.category}
                                        </span>
                                        <h3 className="text-white text-xl font-bold leading-tight">
                                            {image.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ===== UPLOAD / CONTRIBUTION CTA ===== */}
            <section className="py-20 bg-green-deep text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-yellow-sun/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-[800px] mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Photos to Share?</h2>
                    <p className="text-white/80 text-lg md:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed">
                        Are you on the ground in Sarbo Sweaken City? We'd love to see your photos of the ongoing cleanup, planting, and infrastructure work.
                    </p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="mailto:ksscbinc@gmail.com"
                        className="btn btn-donate px-10 py-4 text-xl rounded-full shadow-2xl shadow-yellow-sun/20 inline-block"
                    >
                        📸 Submit Your Photos
                    </motion.a>
                    <p className="mt-8 text-white/50 text-sm italic">
                        All submissions will be reviewed by our team before being added to the official gallery.
                    </p>
                </div>
            </section>
        </div>
    );
}
