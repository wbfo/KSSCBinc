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

export default function Contact() {
    return (
        <>
            {/* ===== PAGE HERO ===== */}
            <div className="relative bg-gradient-to-br from-green-deep to-green-mid pb-20 pt-[140px] md:pt-[160px] text-center text-white sm:-mt-[84px] -mt-[72px] overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-home.png')] opacity-[0.05] mix-blend-overlay object-cover"></div>
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-yellow-sun/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeUp} className="inline-block text-[0.75rem] font-bold tracking-[0.12em] uppercase bg-yellow-sun/20 backdrop-blur-md text-yellow-sun px-4 py-1.5 rounded-full mb-4 border border-yellow-sun/30 shadow-[0_0_15px_rgba(245,197,24,0.15)]">
                            Reach Out
                        </motion.span>
                        <motion.h1 variants={fadeUp} className="text-white mt-1 mb-4 text-4xl md:text-5xl lg:text-6xl drop-shadow-md">Let's Build Together</motion.h1>
                        <motion.p variants={fadeUp} className="text-white/90 text-lg md:text-xl max-w-[620px] mx-auto mt-2 font-medium">
                            Whether you have a question, want to donate, need to arrange a material shipment, or are ready to
                            volunteer we want to hear from you.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* ===== MAIN CONTENT ===== */}
            <section className="py-20 md:py-28 bg-white relative">
                <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-green-pale/30 rounded-full blur-[100px] -z-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                        {/* LEFT: Form */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="lg:w-3/5"
                        >
                            <motion.div variants={fadeUp} className="bg-off-white/80 backdrop-blur-xl border border-gray-100 p-8 md:p-12 rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(26,92,56,0.05)] transition-shadow">
                                <h2 className="text-charcoal mb-3 text-3xl font-bold">Send us a Message</h2>
                                <p className="text-charcoal/70 mb-8 text-[1.05rem] font-medium leading-relaxed">Fill out the form below and we'll get back to you as soon as possible.</p>

                                <form id="contactForm" noValidate className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2 relative">
                                            <label htmlFor="firstName" className="font-bold text-charcoal/90 text-[0.9rem] uppercase tracking-wider">First Name</label>
                                            <input type="text" id="firstName" name="firstName" required className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-mid focus:border-transparent outline-none transition-all shadow-sm hover:border-gray-300" placeholder="John" />
                                        </div>
                                        <div className="space-y-2 relative">
                                            <label htmlFor="lastName" className="font-bold text-charcoal/90 text-[0.9rem] uppercase tracking-wider">Last Name</label>
                                            <input type="text" id="lastName" name="lastName" required className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-mid focus:border-transparent outline-none transition-all shadow-sm hover:border-gray-300" placeholder="Doe" />
                                        </div>
                                    </div>

                                    <div className="space-y-2 relative">
                                        <label htmlFor="email" className="font-bold text-charcoal/90 text-[0.9rem] uppercase tracking-wider">Email Address</label>
                                        <input type="email" id="email" name="email" required className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-mid focus:border-transparent outline-none transition-all shadow-sm hover:border-gray-300" placeholder="john@example.com" />
                                        <p className="text-xs text-charcoal/50 mt-1">We'll never share your email with anyone else.</p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="phone" className="font-bold text-charcoal/90 text-[0.9rem] uppercase tracking-wider">Phone Number <span className="text-gray-400 font-normal normal-case tracking-normal">(Optional)</span></label>
                                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" className="w-full p-4 border border-gray-200 rounded-2xl font-body text-base bg-white focus:outline-none focus:border-green-mid/50 focus:ring-4 focus:ring-green-pale transition-all font-medium text-charcoal outline-none placeholder:text-gray-400 placeholder:font-normal shadow-sm" />
                                    </div>

                                    <div className="space-y-2 relative">
                                        <label htmlFor="subject" className="font-bold text-charcoal/90 text-[0.9rem] uppercase tracking-wider">Subject</label>
                                        <select id="subject" name="subject" required className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-mid focus:border-transparent outline-none transition-all shadow-sm hover:border-gray-300 appearance-none cursor-pointer">
                                            <option value="" disabled selected>Select a topic</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Volunteer">I want to Volunteer</option>
                                            <option value="Donation">Questions about Donating</option>
                                            <option value="Partnership">Partnership Opportunities</option>
                                            <option value="Media">Media Inquiry</option>
                                        </select>
                                        <div className="absolute right-5 top-[42px] pointer-events-none text-gray-400">
                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    </div>

                                    <div className="space-y-2 relative">
                                        <label htmlFor="message" className="font-bold text-charcoal/90 text-[0.9rem] uppercase tracking-wider">Your Message</label>
                                        <textarea id="message" name="message" rows={5} required className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-mid focus:border-transparent outline-none transition-all shadow-sm hover:border-gray-300 resize-y" placeholder="How can we help you?"></textarea>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="btn btn-primary btn-lg w-full justify-center mt-4 group shadow-lg shadow-green-deep/20 text-[1.05rem] py-4"
                                    >
                                        Send Message <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                                    </motion.button>
                                </form>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT: Contact Info */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                            className="lg:w-2/5 flex flex-col gap-6"
                        >
                            {/* General Contact */}
                            <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow text-center sm:text-left">
                                <h3 className="text-charcoal mb-6 text-2xl font-bold">General Contact</h3>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-off-white text-2xl flex items-center justify-center shrink-0 border border-gray-100/50 shadow-sm text-green-mid">📧</div>
                                        <div>
                                            <div className="text-[0.75rem] uppercase tracking-widest text-charcoal/50 font-bold mb-1">General Email</div>
                                            <p className="m-0 font-bold text-green-deep hover:text-green-mid text-lg transition-colors"><a href="mailto:ksscbinc@gmail.com">ksscbinc@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-off-white text-2xl flex items-center justify-center shrink-0 border border-gray-100/50 shadow-sm text-green-mid">📞</div>
                                        <div>
                                            <div className="text-[0.75rem] uppercase tracking-widest text-charcoal/50 font-bold mb-1">General Phone</div>
                                            <p className="m-0 font-bold text-green-deep hover:text-green-mid text-lg transition-colors"><a href="tel:011231088620751">011-231-088-620-7513</a></p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-off-white text-2xl flex items-center justify-center shrink-0 border border-gray-100/50 shadow-sm text-green-mid">📍</div>
                                        <div>
                                            <div className="text-[0.75rem] uppercase tracking-widest text-charcoal/50 font-bold mb-1">Physical Address</div>
                                            <p className="m-0 text-charcoal/80 text-[1rem] leading-relaxed font-medium">Sarbo Sweaken City<br />River Gee County, Liberia<br />West Africa</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-[#1877F2]/10 text-2xl flex items-center justify-center shrink-0 border border-[#1877F2]/20 shadow-sm text-[#1877F2]">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div>
                                            <div className="text-[0.75rem] uppercase tracking-widest text-charcoal/50 font-bold mb-1">Facebook Community</div>
                                            <p className="m-0 font-bold text-[#1877F2] hover:text-[#1877F2]/80 text-[1.05rem] transition-colors"><a href="https://www.facebook.com/share/g/1BUWtUqyh5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Join our Group</a></p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Leadership Contact */}
                            <motion.div variants={fadeUp} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-shadow text-center sm:text-left">
                                <h3 className="text-charcoal mb-6 text-xl font-bold">Reach Our Founders Directly</h3>
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-off-white text-2xl flex items-center justify-center shrink-0 border border-gray-100/50 shadow-sm text-charcoal/50">👤</div>
                                        <div>
                                            <div className="text-[0.75rem] uppercase tracking-widest text-charcoal/50 font-bold mb-1">Franklin Wlehka Tuweh – US Direct (NYC)</div>
                                            <p className="m-0 font-bold text-green-deep hover:text-green-mid text-lg transition-colors leading-tight">
                                                <a href="tel:13477773388" className="block mb-1">Primary: (347) 777-3388</a>
                                                <a href="tel:13479120405" className="block text-[0.95rem]">+1 (347) 912-0405</a>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-off-white text-2xl flex items-center justify-center shrink-0 border border-gray-100/50 shadow-sm text-charcoal/50">👤</div>
                                        <div>
                                            <div className="text-[0.75rem] uppercase tracking-widest text-charcoal/50 font-bold mb-1">Patrick C. Kumeh – Co-Founder</div>
                                            <p className="m-0 font-bold text-green-deep hover:text-green-mid text-lg transition-colors break-all"><a href="mailto:patrickckumeh@gmail.com">patrickckumeh@gmail.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Hours & Response */}
                            <motion.div variants={fadeUp} className="bg-green-pale/40 backdrop-blur-sm p-8 rounded-[2rem] border border-green-pale">
                                <div className="w-12 h-12 rounded-2xl bg-green-mid text-white text-2xl flex items-center justify-center mb-6 shadow-md shadow-green-mid/30 mx-auto sm:mx-0">⏱️</div>
                                <h4 className="text-green-deep text-xl font-bold mb-3 text-center sm:text-left">Response Time</h4>
                                <p className="text-charcoal/80 text-[1rem] leading-relaxed m-0 font-medium text-center sm:text-left">
                                    We aim to respond to all inquiries within <strong className="text-green-deep">2–3 business days</strong>. For urgent
                                    matters, please call us directly on the numbers listed above.
                                </p>
                            </motion.div>

                            {/* Map Placeholder */}
                            <motion.div variants={fadeUp} className="bg-gray-100/50 p-8 rounded-[2rem] border border-gray-200 relative overflow-hidden flex flex-col justify-center min-h-[240px]">
                                <div className="absolute inset-0 opacity-5 flex items-center justify-center text-[12rem] pointer-events-none -rotate-12">🌍</div>
                                <div className="relative z-10 text-center">
                                    <div className="text-4xl mb-4 drop-shadow-md">📍</div>
                                    <h4 className="text-green-deep text-lg font-bold mb-3">Our Location</h4>
                                    <p className="text-charcoal/80 leading-relaxed m-0 text-[1rem] font-medium">
                                        <strong>Sarbo Sweaken City</strong><br />
                                        River Gee County, Liberia<br />
                                        Southeast Liberia, West Africa
                                    </p>
                                    <p className="text-[0.8rem] text-charcoal/60 leading-relaxed mt-4 mb-0 max-w-[280px] mx-auto">
                                        River Gee County is located in the remote southeastern corner of Liberia, bordering Côte
                                        d'Ivoire.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ===== CLOSING CTA ===== */}
            <section className="py-24 md:py-32 bg-gradient-to-br from-yellow-sun to-yellow-warm text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/hero-home.png')] opacity-[0.03] mix-blend-overlay object-cover"></div>
                <div className="absolute top-1/2 left-1/2 w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="w-full max-w-[800px] mx-auto relative z-10">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeUp} className="text-charcoal mt-2 mb-6 text-4xl md:text-5xl font-extrabold max-w-[600px] mx-auto leading-tight text-shadow-sm">Not sure how to help? Just ask.</motion.h2>
                        <motion.p variants={fadeUp} className="text-charcoal/80 text-lg md:text-xl mb-12 font-medium max-w-[650px] mx-auto leading-relaxed">Our founders are passionate, approachable, and grateful for every message. If you're curious about our work or want to learn more before committing we'd love to talk.</motion.p>
                        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/get-involved" className="btn btn-donate btn-lg shadow-xl shadow-green-deep/20 w-full px-10">
                                    💛 Donate Now
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                                <Link href="/projects" className="btn btn-outline-dark border-charcoal/20 hover:bg-white/50 btn-lg w-full px-10">
                                    See Our Projects →
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
