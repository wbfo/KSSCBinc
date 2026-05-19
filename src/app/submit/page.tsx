"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { submitPhoto, uploadPhotoFile } from "@/lib/photoService";

const CATEGORIES = ["Infrastructure", "Sanitation", "Civic Tools", "Greening", "Conservation"];

export default function SubmitPhoto() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [caption, setCaption] = useState("");
    const [category, setCategory] = useState("Infrastructure");
    const [imageSource, setImageSource] = useState<"file" | "url">("file");
    const [imageUrl, setImageUrl] = useState("");
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files?.[0];
        if (file && file.type.startsWith("image/")) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFilePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const clearFile = () => {
        setSelectedFile(null);
        setFilePreview(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        try {
            let uploadedUrl = imageUrl;

            if (imageSource === "file") {
                if (!selectedFile) {
                    throw new Error("Please select an image file to upload");
                }
                // Upload file (returns base64 in mock mode, or public CDN URL in live mode)
                uploadedUrl = await uploadPhotoFile(selectedFile);
            } else {
                if (!imageUrl.trim()) {
                    throw new Error("Please enter a valid image URL");
                }
            }

            await submitPhoto({
                submitter_name: name,
                submitter_email: email,
                caption: caption,
                category: category,
                image_url: uploadedUrl
            });

            setSubmitStatus("success");
            // Reset form
            setName("");
            setEmail("");
            setCaption("");
            setSelectedFile(null);
            setFilePreview(null);
            setImageUrl("");
        } catch (error) {
            console.error("Submission failed:", error);
            setErrorMessage(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-off-white py-16 md:py-24 sm:-mt-[84px] -mt-[72px] flex items-center justify-center relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-green-deep/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-yellow-sun/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[700px] w-full mx-auto px-4 relative z-10">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        href="/gallery"
                        className="inline-flex items-center text-sm font-bold text-green-deep hover:text-green-light transition-colors gap-2"
                    >
                        ← Back to Impact Gallery
                    </Link>
                </div>

                <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-12">
                    <AnimatePresence mode="wait">
                        {submitStatus === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="text-center py-10"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-50 text-green-deep border border-green-200/50 flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
                                    ✓
                                </div>
                                <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Photo Submitted!</h2>
                                <p className="text-gray-500 max-w-[450px] mx-auto leading-relaxed mb-10 text-base">
                                    Thank you for sharing your view of Sarbo Sweaken City. Your photo has been sent to our moderators and will appear in the public gallery once approved.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="w-full sm:w-auto px-8 py-3.5 bg-green-deep hover:bg-green-light text-white font-extrabold rounded-full transition-colors cursor-pointer"
                                    >
                                        Submit Another Photo
                                    </button>
                                    <Link
                                        href="/gallery"
                                        className="w-full sm:w-auto px-8 py-3.5 bg-white text-green-deep border border-gray-200 hover:bg-green-50 font-bold rounded-full text-center transition-colors"
                                    >
                                        Return to Gallery
                                    </Link>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div className="mb-10 text-center sm:text-left">
                                    <span className="inline-block text-[0.7rem] font-extrabold uppercase tracking-widest text-green-deep bg-green-50 px-3.5 py-1.5 rounded-full border border-green-deep/10 mb-4">
                                        Community Contribution
                                    </span>
                                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-tight">
                                        Share an Impact Photo
                                    </h1>
                                    <p className="text-gray-500 mt-3 text-base">
                                        Help us document the physical improvements and active transformations taking place across our community.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name & Email Fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="e.g. John Doe"
                                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white focus:outline-none focus:border-green-deep focus:bg-white text-sm font-medium transition-all text-gray-800"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="e.g. name@example.com"
                                                className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white focus:outline-none focus:border-green-deep focus:bg-white text-sm font-medium transition-all text-gray-800"
                                            />
                                        </div>
                                    </div>

                                    {/* Category Select */}
                                    <div>
                                        <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                                            Photo Category
                                        </label>
                                        <select
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white focus:outline-none focus:border-green-deep focus:bg-white text-sm font-bold transition-all text-gray-800 appearance-none cursor-pointer"
                                        >
                                            {CATEGORIES.map((cat) => (
                                                <option key={cat} value={cat}>
                                                    {cat}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Caption Field */}
                                    <div>
                                        <label className="block text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">
                                            Description / Caption
                                        </label>
                                        <textarea
                                            required
                                            rows={3}
                                            maxLength={200}
                                            value={caption}
                                            onChange={(e) => setCaption(e.target.value)}
                                            placeholder="What is happening in this photo? Explain the impact... (max 200 chars)"
                                            className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white focus:outline-none focus:border-green-deep focus:bg-white text-sm font-medium transition-all text-gray-800 resize-none"
                                        />
                                    </div>

                                    {/* Toggle: File Upload vs Image URL */}
                                    <div className="border-t border-gray-100 pt-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                                                Image Input Method
                                            </span>
                                            <div className="flex bg-off-white p-1 rounded-full border border-gray-200">
                                                <button
                                                    type="button"
                                                    onClick={() => setImageSource("file")}
                                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                                                        imageSource === "file"
                                                            ? "bg-white text-green-deep shadow-sm"
                                                            : "text-gray-400 hover:text-gray-600"
                                                    }`}
                                                >
                                                    Upload File
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setImageSource("url")}
                                                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                                                        imageSource === "url"
                                                            ? "bg-white text-green-deep shadow-sm"
                                                            : "text-gray-400 hover:text-gray-600"
                                                    }`}
                                                >
                                                    Image URL
                                                </button>
                                            </div>
                                        </div>

                                        {imageSource === "file" ? (
                                            /* File Dropzone */
                                            <div
                                                onDragOver={handleDragOver}
                                                onDrop={handleDrop}
                                                className={`border-2 border-dashed rounded-3xl p-6 text-center cursor-pointer transition-all ${
                                                    filePreview
                                                        ? "border-green-deep bg-green-50/10"
                                                        : "border-gray-300 hover:border-green-deep bg-off-white"
                                                }`}
                                                onClick={() => !filePreview && fileInputRef.current?.click()}
                                            >
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleFileChange}
                                                    accept="image/*"
                                                    className="hidden"
                                                />
                                                {filePreview ? (
                                                    <div className="relative max-w-[250px] mx-auto">
                                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                                        <img
                                                            src={filePreview}
                                                            alt="Preview"
                                                            className="rounded-2xl max-h-[160px] mx-auto object-cover border border-gray-200 shadow-md"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                clearFile();
                                                            }}
                                                            className="absolute -top-2.5 -right-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shadow-lg cursor-pointer"
                                                        >
                                                            ✕
                                                        </button>
                                                    </div>
                                                ) : (
                                                    <div className="py-4">
                                                        <span className="text-3xl block mb-2">📥</span>
                                                        <p className="text-sm font-bold text-gray-700">
                                                            Drag & drop your photo, or <span className="text-green-deep underline">browse files</span>
                                                        </p>
                                                        <p className="text-xs text-gray-400 mt-1">
                                                            Supports JPEG, PNG, or WebP formats
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            /* Image URL Input */
                                            <div>
                                                <input
                                                    type="url"
                                                    value={imageUrl}
                                                    onChange={(e) => setImageUrl(e.target.value)}
                                                    placeholder="https://example.com/photo.jpg"
                                                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white focus:outline-none focus:border-green-deep focus:bg-white text-sm font-medium transition-all text-gray-800"
                                                />
                                                <p className="text-xs text-gray-400 mt-2">
                                                    Provide a public link to the photo (e.g. from an online drive or website).
                                                </p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Errors display */}
                                    {errorMessage && (
                                        <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-red-600 text-xs font-bold leading-relaxed">
                                            ⚠ {errorMessage}
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting || (imageSource === "file" && !selectedFile) || (imageSource === "url" && !imageUrl)}
                                        className={`w-full py-4 rounded-full font-extrabold text-white text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all ${
                                            isSubmitting
                                                ? "bg-green-deep/70 cursor-not-allowed"
                                                : "bg-green-deep hover:bg-green-light active:scale-[0.98] shadow-green-deep/20 hover:shadow-green-light/20"
                                        }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
                                                Submitting Photo...
                                            </>
                                        ) : (
                                            "Submit for Approval"
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
