import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-white/75 py-16 pb-10 relative z-20 border-t border-white/5">
            <div className="w-full max-w-[1200px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 mb-10">

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <span className="text-white text-[1.25rem] font-extrabold block mb-1">🌿 KSSCB Inc.</span>
                        <span className="text-yellow-sun text-[0.7rem] tracking-widest uppercase block mb-6">
                            Keep Sarbo Sweaken Clean & Beautiful
                        </span>
                        <p className="text-[0.9rem] leading-[1.7] text-white/60 mb-6 w-full max-w-[400px]">
                            A non-profit NGO working to transform Sarbo Sweaken City, River Gee County, Liberia into the cleanest and most beautiful city in West Africa. Incorporated May 21, 2025.
                        </p>
                        <Link href="/get-involved" className="btn btn-donate md:self-start px-5 py-2">
                            💛 Donate Now
                        </Link>
                    </div>

                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="text-white text-[0.85rem] font-bold tracking-widest uppercase mb-4">Navigation</div>
                        <ul className="flex flex-col gap-2 items-center md:items-start">
                            <li><Link href="/" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Home</Link></li>
                            <li><Link href="/about" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">About Us</Link></li>
                            <li><Link href="/projects" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Our Projects</Link></li>
                            <li><Link href="/get-involved" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Get Involved</Link></li>
                            <li><Link href="/contact" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="text-white text-[0.85rem] font-bold tracking-widest uppercase mb-4">Programs</div>
                        <ul className="flex flex-col gap-2 items-center md:items-start">
                            <li><Link href="/projects#greening" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Urban Greening</Link></li>
                            <li><Link href="/projects#infrastructure" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Civic Infrastructure</Link></li>
                            <li><Link href="/projects#sanitation" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Sanitation</Link></li>
                            <li><Link href="/get-involved#volunteer" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Volunteer</Link></li>
                            <li><Link href="/get-involved#wishlist" className="text-[0.9rem] text-white/60 hover:text-yellow-sun transition-all duration-300">Material Wishlist</Link></li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <div className="text-white text-[0.85rem] font-bold tracking-widest uppercase mb-4">Contact Us</div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2.5 text-[0.875rem] text-white/65 mb-4 md:mb-2.5">
                            <svg className="shrink-0 w-[18px] h-[18px] mt-0.5 text-yellow-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span>Sarbo Sweaken City, River Gee County, Liberia</span>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2.5 text-[0.875rem] text-white/65 mb-4 md:mb-2.5">
                            <svg className="shrink-0 w-[18px] h-[18px] mt-0.5 text-yellow-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <a href="mailto:ksscbinc@gmail.com" className="hover:text-yellow-sun transition-colors">ksscbinc@gmail.com</a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2.5 text-[0.875rem] text-white/65 mb-4 md:mb-2.5">
                            <svg className="shrink-0 w-[18px] h-[18px] mt-0.5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            <a href="https://www.facebook.com/share/g/1BUWtUqyh5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-[#1877F2] transition-colors">Facebook Community</a>
                        </div>
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2.5 text-[0.875rem] text-white/65 mb-4 md:mb-2.5">
                            <svg className="shrink-0 w-[18px] h-[18px] mt-0.5 text-yellow-sun" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>011-231-088-620-7513</span>
                        </div>
                    </div>

                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap text-[0.8rem] text-white/45 text-center md:text-left">
                    <span>© 2025 KSSCB Inc. Incorporated May 21, 2025. All rights reserved.</span>
                    <div className="flex gap-4 flex-wrap justify-center md:justify-end">
                        <span>Non-Profit Organization | Liberia</span>
                        <span className="hidden sm:inline">|</span>
                        <span>501(c)(3) Equivalent Registration Pending</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
