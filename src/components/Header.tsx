"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/projects", label: "Our Projects" },
        { href: "/get-involved", label: "Get Involved" },
        { href: "/contact", label: "Contact" },
    ];

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
                    isScrolled
                        ? "bg-green-deep/85 backdrop-blur-xl shadow-lg border-b border-white/10 py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between gap-4">

                        <Link href="/" className="flex flex-col leading-tight z-50 group">
                            <span className="font-extrabold text-[1.25rem] text-white tracking-tight group-hover:text-yellow-sun transition-colors">
                                🌿 KSSCB Inc.
                            </span>
                            <span className="text-[0.6rem] text-yellow-sun/90 font-medium tracking-wider uppercase">
                                Keep Sarbo Sweaken Clean & Beautiful
                            </span>
                        </Link>

                        <div className="hidden lg:flex items-center gap-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link key={link.href} href={link.href} className="relative group px-4 py-2">
                                        <span className={cn(
                                            "relative z-10 text-[0.95rem] font-medium transition-colors duration-300",
                                            isActive ? "text-white" : "text-white/80 group-hover:text-white"
                                        )}>
                                            {link.label}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="nav-indicator"
                                                className="absolute inset-0 bg-white/10 rounded-full z-0"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        {!isActive && (
                                            <div className="absolute inset-0 bg-white/10 rounded-full z-0 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300" />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link href="/get-involved" className="btn btn-donate px-7 py-2.5 rounded-full shadow-lg shadow-yellow-sun/20">
                                    💛 Donate Now
                                </Link>
                            </motion.div>
                        </div>

                        <button
                            className="lg:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer z-[1000] relative"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <motion.span animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-white rounded-full origin-center transition-all bg-white" />
                            <motion.span animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-[2px] bg-white rounded-full transition-all" />
                            <motion.span animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-[2px] bg-white rounded-full origin-center transition-all" />
                        </button>

                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.4 }}
                        onClick={toggleMenu} // Close when clicking the overlay
                        className="fixed inset-0 z-[900] bg-green-deep/95 flex flex-col items-center justify-center p-6 cursor-pointer"
                    >
                        <motion.div
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                            className="flex flex-col items-center gap-6 w-full max-w-sm"
                        >
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.href}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: 20 }
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className={cn(
                                            "text-2xl font-semibold transition-colors text-center block w-full",
                                            pathname === link.href ? "text-yellow-sun" : "text-white hover:text-yellow-sun/80"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                variants={{
                                    open: { opacity: 1, scale: 1 },
                                    closed: { opacity: 0, scale: 0.9 }
                                }}
                                className="w-full mt-8"
                            >
                                <Link
                                    href="/get-involved"
                                    onClick={toggleMenu}
                                    className="btn btn-donate text-xl px-8 py-4 rounded-full w-full flex justify-center shadow-xl shadow-yellow-sun/20"
                                >
                                    💛 Donate Now
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
