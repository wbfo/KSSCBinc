"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getApprovedPhotos, Photo } from "@/lib/photoService";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const CATEGORIES = ["All", "Infrastructure", "Sanitation", "Civic Tools", "Greening", "Conservation"];

export default function Gallery() {
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchPhotos() {
            try {
                const data = await getApprovedPhotos();
                setPhotos(data);
                setFilteredPhotos(data);
            } catch (error) {
                console.error("Error loading gallery photos:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPhotos();
    }, []);

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredPhotos(photos);
        } else {
            setFilteredPhotos(photos.filter(p => p.category === selectedCategory));
        }
    }, [selectedCategory, photos]);

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

            {/* ===== CATEGORY FILTERS ===== */}
            <div className="bg-off-white/80 py-8 border-b border-gray-100 sticky top-[72px] sm:top-[84px] z-20 backdrop-blur-md">
                <div className="max-w-[1200px] mx-auto px-4">
                    <div className="flex items-center justify-center overflow-x-auto gap-3 py-2 scrollbar-none">
                        {CATEGORIES.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap cursor-pointer ${
                                    selectedCategory === category
                                        ? "bg-green-deep text-white shadow-md shadow-green-deep/20 scale-105"
                                        : "bg-white text-green-deep border border-gray-100 hover:bg-green-50"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ===== GALLERY GRID ===== */}
            <section className="py-16 md:py-24 bg-off-white/50">
                <div className="max-w-[1200px] mx-auto px-4">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-12 h-12 rounded-full border-4 border-green-deep/20 border-t-green-deep animate-spin mb-4"></div>
                            <p className="text-gray-500 font-bold">Loading impact gallery...</p>
                        </div>
                    ) : filteredPhotos.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                            <span className="text-5xl block mb-4">📷</span>
                            <h3 className="text-xl font-bold text-gray-700 mb-2">No photos found</h3>
                            <p className="text-gray-400 max-w-[400px] mx-auto">
                                There are currently no approved photos in the &quot;{selectedCategory}&quot; category.
                            </p>
                        </div>
                    ) : (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredPhotos.map((photo) => (
                                <motion.div
                                    key={photo.id}
                                    variants={fadeUp}
                                    whileHover={{ y: -8 }}
                                    onClick={() => setSelectedPhoto(photo)}
                                    className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 bg-white cursor-pointer"
                                >
                                    <Image
                                        src={photo.image_url}
                                        alt={photo.caption}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-deep/90 via-green-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="inline-block text-[0.65rem] font-bold uppercase tracking-widest text-yellow-sun mb-2 bg-yellow-sun/10 px-3 py-1 rounded-full border border-yellow-sun/20">
                                                {photo.category}
                                            </span>
                                            <p className="text-white text-sm font-bold line-clamp-2 leading-tight">
                                                {photo.caption}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </section>

            {/* ===== DETAILED MODAL OVERLAY ===== */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPhoto(null)}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-[900px] w-full overflow-hidden shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors cursor-pointer"
                            >
                                ✕
                            </button>

                            {/* Left: Image Container */}
                            <div className="relative aspect-[4/3] md:aspect-auto md:w-3/5 bg-black flex items-center justify-center h-[300px] md:h-[500px]">
                                <Image
                                    src={selectedPhoto.image_url}
                                    alt={selectedPhoto.caption}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Right: Meta Details */}
                            <div className="p-8 md:w-2/5 flex flex-col justify-between overflow-y-auto">
                                <div>
                                    <span className="inline-block text-[0.7rem] font-extrabold uppercase tracking-widest text-green-deep bg-green-50 px-3 py-1 rounded-full border border-green-deep/10 mb-4">
                                        {selectedPhoto.category}
                                    </span>
                                    <h3 className="text-gray-800 text-lg font-bold leading-relaxed mb-6">
                                        {selectedPhoto.caption}
                                    </h3>
                                </div>

                                <div className="border-t border-gray-100 pt-6 mt-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-green-deep/10 flex items-center justify-center text-green-deep font-extrabold text-sm">
                                            {selectedPhoto.submitter_name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Submitted By</p>
                                            <p className="text-sm font-extrabold text-gray-800">{selectedPhoto.submitter_name}</p>
                                            <p className="text-xs text-gray-500">
                                                {new Date(selectedPhoto.created_at).toLocaleDateString(undefined, {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric"
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== UPLOAD / CONTRIBUTION CTA ===== */}
            <section className="py-20 bg-green-deep text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-yellow-sun/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="max-w-[800px] mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Photos to Share?</h2>
                    <p className="text-white/80 text-lg md:text-xl mb-10 max-w-[600px] mx-auto leading-relaxed">
                        Are you on the ground in Sarbo Sweaken City? We&apos;d love to see your photos of the ongoing cleanup, planting, and infrastructure work.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                        <Link
                            href="/submit"
                            className="btn btn-donate px-10 py-4 text-xl rounded-full shadow-2xl shadow-yellow-sun/20 inline-block font-extrabold"
                        >
                            📸 Share a Photo
                        </Link>
                    </motion.div>
                    <p className="mt-8 text-white/50 text-sm italic">
                        All submissions will be reviewed by our team before being added to the official gallery.
                    </p>
                </div>
            </section>
        </div>
    );
}
