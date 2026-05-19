"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { getAllPhotosAdmin, updatePhotoStatus, Photo } from "@/lib/photoService";

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    const [photos, setPhotos] = useState<Photo[]>([]);
    const [activeTab, setActiveTab] = useState<"pending" | "approved" | "rejected">("pending");
    const [isLoading, setIsLoading] = useState(true);
    const [actionMessage, setActionMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    // Authentication check
    useEffect(() => {
        if (typeof window !== "undefined") {
            const auth = sessionStorage.getItem("ksscb_admin_auth");
            if (auth === "true") {
                setIsAuthenticated(true);
            }
        }
    }, []);

    // Fetch data
    useEffect(() => {
        if (isAuthenticated) {
            fetchAdminPhotos();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    async function fetchAdminPhotos() {
        setIsLoading(true);
        try {
            const data = await getAllPhotosAdmin();
            setPhotos(data);
        } catch (error) {
            console.error("Failed to load admin photos:", error);
            showToast("Failed to fetch photo queue", "error");
        } finally {
            setIsLoading(false);
        }
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError("");

        if (password === "ksscb2026") {
            setIsAuthenticated(true);
            if (typeof window !== "undefined") {
                sessionStorage.setItem("ksscb_admin_auth", "true");
            }
        } else {
            setLoginError("Invalid administrator credentials");
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setPassword("");
        if (typeof window !== "undefined") {
            sessionStorage.removeItem("ksscb_admin_auth");
        }
    };

    const handleStatusUpdate = async (id: string, newStatus: "approved" | "rejected" | "pending") => {
        try {
            await updatePhotoStatus(id, newStatus);
            showToast(`Photo successfully ${newStatus === 'approved' ? 'published to the gallery' : newStatus === 'rejected' ? 'rejected and archived' : 'marked as pending'}.`, "success");
            // Refresh list
            fetchAdminPhotos();
        } catch (error) {
            console.error("Failed to update status:", error);
            showToast("Failed to update photo status", "error");
        }
    };

    const showToast = (text: string, type: "success" | "error") => {
        setActionMessage({ text, type });
        setTimeout(() => {
            setActionMessage(null);
        }, 4000);
    };

    // Calculate metrics
    const totalCount = photos.length;
    const pendingPhotos = photos.filter(p => p.status === "pending");
    const approvedPhotos = photos.filter(p => p.status === "approved");
    const rejectedPhotos = photos.filter(p => p.status === "rejected");

    const currentQueue = activeTab === "pending"
        ? pendingPhotos
        : activeTab === "approved"
            ? approvedPhotos
            : rejectedPhotos;

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-off-white py-16 md:py-24 sm:-mt-[84px] -mt-[72px] flex items-center justify-center relative overflow-hidden">
                {/* Glow effects */}
                <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-green-deep/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-yellow-sun/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-[480px] w-full mx-auto px-4 relative z-10 animate-fade-in">
                    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-8 md:p-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-green-deep/5 text-green-deep flex items-center justify-center mx-auto mb-6 text-2xl">
                            🔒
                        </div>
                        <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Admin Dashboard</h1>
                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                            Authorized access only. Please provide the portal security key to view the submission queue.
                        </p>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter security key..."
                                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-off-white focus:outline-none focus:border-green-deep focus:bg-white text-center text-sm font-bold tracking-widest text-gray-800 transition-all"
                                />
                            </div>

                            {loginError && (
                                <div className="text-red-500 text-xs font-bold bg-red-50 py-2.5 px-4 rounded-xl border border-red-100">
                                    ⚠ {loginError}
                                </div>
                            )}

                            <button
                                type="submit"
                                className="w-full py-4 rounded-full font-extrabold text-white text-sm bg-green-deep hover:bg-green-light active:scale-[0.98] transition-all shadow-xl shadow-green-deep/15 cursor-pointer"
                            >
                                Authenticate Gateway
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-off-white py-12 sm:-mt-[84px] -mt-[72px]">
            {/* Ambient glows */}
            <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-green-deep/5 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

            <div className="max-w-[1280px] w-full mx-auto px-4 mt-12 relative z-10">
                {/* Dashboard Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-md">
                    <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-green-600 bg-green-50 px-2.5 py-1 rounded-full border border-green-500/10">
                                Portal Active
                            </span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Impact Photo Control Panel</h1>
                        <p className="text-gray-400 text-sm mt-1">Review community photo submissions and publish approved visuals.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/gallery"
                            className="px-5 py-2.5 bg-off-white text-green-deep hover:bg-green-50 text-xs font-bold rounded-full border border-gray-200 text-center transition-all"
                        >
                            View Public Gallery
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="px-5 py-2.5 bg-red-50 text-red-600 hover:bg-red-100 text-xs font-bold rounded-full border border-red-100 cursor-pointer transition-all"
                        >
                            Lock Dashboard
                        </button>
                    </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Total Received</p>
                            <h3 className="text-3xl font-extrabold text-gray-800 mt-1">{totalCount}</h3>
                        </div>
                        <span className="text-2xl opacity-40">📥</span>
                    </div>
                    <div className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs text-yellow-600 font-bold uppercase tracking-wider">Pending Review</p>
                            <h3 className="text-3xl font-extrabold text-yellow-700 mt-1">{pendingPhotos.length}</h3>
                        </div>
                        <span className="text-2xl opacity-60">⏳</span>
                    </div>
                    <div className="bg-green-50/50 p-6 rounded-2xl border border-green-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs text-green-600 font-bold uppercase tracking-wider">Approved & Live</p>
                            <h3 className="text-3xl font-extrabold text-green-700 mt-1">{approvedPhotos.length}</h3>
                        </div>
                        <span className="text-2xl opacity-60">🟢</span>
                    </div>
                    <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100 shadow-sm flex items-center justify-between">
                        <div>
                            <p className="text-xs text-red-600 font-bold uppercase tracking-wider">Rejected Queue</p>
                            <h3 className="text-3xl font-extrabold text-red-700 mt-1">{rejectedPhotos.length}</h3>
                        </div>
                        <span className="text-2xl opacity-60">🔴</span>
                    </div>
                </div>

                {/* Queue Tabs */}
                <div className="flex bg-white p-1 rounded-full border border-gray-200 max-w-md mb-8">
                    <button
                        onClick={() => setActiveTab("pending")}
                        className={`flex-1 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            activeTab === "pending"
                                ? "bg-green-deep text-white shadow-sm font-extrabold"
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Pending Queue ({pendingPhotos.length})
                    </button>
                    <button
                        onClick={() => setActiveTab("approved")}
                        className={`flex-1 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            activeTab === "approved"
                                ? "bg-green-deep text-white shadow-sm font-extrabold"
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Approved Gallery ({approvedPhotos.length})
                    </button>
                    <button
                        onClick={() => setActiveTab("rejected")}
                        className={`flex-1 py-3 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            activeTab === "rejected"
                                ? "bg-green-deep text-white shadow-sm font-extrabold"
                                : "text-gray-400 hover:text-gray-600"
                        }`}
                    >
                        Rejected Archive ({rejectedPhotos.length})
                    </button>
                </div>

                {/* Content Queue */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-8">
                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="w-10 h-10 rounded-full border-4 border-green-deep/20 border-t-green-deep animate-spin mb-4"></div>
                            <p className="text-gray-500 font-bold text-sm">Fetching queue...</p>
                        </div>
                    ) : currentQueue.length === 0 ? (
                        <div className="text-center py-20">
                            <span className="text-4xl block mb-3">📁</span>
                            <h3 className="text-lg font-bold text-gray-600">No submissions in this queue</h3>
                            <p className="text-gray-400 text-xs mt-1">There are no items currently categorized under &quot;{activeTab}&quot;.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {currentQueue.map((photo) => (
                                <motion.div
                                    key={photo.id}
                                    layout
                                    className="bg-off-white rounded-2xl overflow-hidden border border-gray-200/50 shadow-sm flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Image wrapper */}
                                        <div className="relative aspect-[16/10] bg-black">
                                            <Image
                                                src={photo.image_url}
                                                alt={photo.caption}
                                                fill
                                                className="object-cover"
                                            />
                                            <span className="absolute top-3 left-3 text-[0.65rem] font-extrabold uppercase tracking-widest text-green-deep bg-white/95 px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                                {photo.category}
                                            </span>
                                        </div>

                                        {/* Text Info */}
                                        <div className="p-6">
                                            <p className="text-sm font-bold text-gray-700 leading-relaxed mb-4 line-clamp-3">
                                                &quot;{photo.caption}&quot;
                                            </p>
                                            <div className="space-y-1 bg-white p-4 rounded-xl border border-gray-200/50 text-xs">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400 font-medium">Submitter:</span>
                                                    <span className="font-bold text-gray-700">{photo.submitter_name}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400 font-medium">Email:</span>
                                                    <span className="font-bold text-gray-500 select-all">{photo.submitter_email}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400 font-medium">Date:</span>
                                                    <span className="font-bold text-gray-500">
                                                        {new Date(photo.created_at).toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action row */}
                                    <div className="p-6 pt-0 border-t border-gray-200/40 mt-2 bg-white/50">
                                        {photo.status === "pending" ? (
                                            <div className="flex gap-3 mt-4">
                                                <button
                                                    onClick={() => handleStatusUpdate(photo.id, "approved")}
                                                    className="flex-1 py-2.5 rounded-full text-xs font-bold text-white bg-green-600 hover:bg-green-700 transition-colors shadow-md shadow-green-600/10 cursor-pointer"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(photo.id, "rejected")}
                                                    className="flex-1 py-2.5 rounded-full text-xs font-bold text-white bg-red-500 hover:bg-red-600 transition-colors shadow-md shadow-red-500/10 cursor-pointer"
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        ) : photo.status === "approved" ? (
                                            <button
                                                onClick={() => handleStatusUpdate(photo.id, "rejected")}
                                                className="w-full mt-4 py-2.5 rounded-full text-xs font-bold text-red-500 border border-red-200 hover:bg-red-50 transition-colors cursor-pointer"
                                            >
                                                Revoke Approval (Reject)
                                            </button>
                                        ) : (
                                            <button
                                                onClick={() => handleStatusUpdate(photo.id, "approved")}
                                                className="w-full mt-4 py-2.5 rounded-full text-xs font-bold text-green-600 border border-green-200 hover:bg-green-50 transition-colors cursor-pointer"
                                            >
                                                Re-Approve (Publish)
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Notification Toast */}
            <AnimatePresence>
                {actionMessage && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className={`fixed bottom-8 right-8 z-50 px-6 py-4 rounded-2xl text-xs font-bold shadow-2xl flex items-center gap-3 border ${
                            actionMessage.type === "success"
                                ? "bg-green-900 border-green-800 text-green-100"
                                : "bg-red-950 border-red-900 text-red-200"
                        }`}
                    >
                        <span>{actionMessage.type === "success" ? "✓" : "⚠"}</span>
                        <span>{actionMessage.text}</span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
