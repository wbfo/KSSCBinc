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

export default function Home() {
  return (
    <>
      <section className="relative flex items-center min-h-[100svh] overflow-hidden sm:-mt-[84px] -mt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.png"
            alt="Aerial view of Sarbo Sweaken"
            fill
            className="object-cover object-center scale-105"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-green-deep/70 to-green-deep/90 z-10"></div>
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] bg-yellow-sun/20 rounded-full blur-[100px] z-10 mix-blend-overlay"></div>

        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24 lg:pb-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-[780px] text-center md:text-left mx-auto md:mx-0"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-yellow-sun/20 backdrop-blur-md border border-yellow-sun/40 text-yellow-sun text-[0.8rem] font-semibold tracking-widest uppercase px-5 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(245,197,24,0.15)]">
              🌍 Sarbo Sweaken City, Liberia, West Africa
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-white mb-6 drop-shadow-lg text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Building a Cleaner, Greener, and Healthier Sarbo Sweaken City.
            </motion.h1>
            <motion.h2 variants={fadeUp} className="text-white/90 text-[clamp(1.1rem,2.5vw,1.4rem)] font-normal font-body mb-10 max-w-[640px] mx-auto md:mx-0 leading-relaxed drop-shadow-sm">
              Join KSSCB Inc. in our mission to transform our home into the cleanest, most vibrant city in Liberia, West Africa.
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/get-involved" className="btn btn-donate btn-lg shadow-xl shadow-yellow-sun/20 w-full sm:w-auto text-center block">
                  💛 Support Our Mission
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/projects" className="btn btn-outline btn-lg bg-white/5 backdrop-blur-sm border-white/30 hover:bg-white/10 w-full sm:w-auto text-center block">
                  See Our Projects →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 text-[0.75rem] tracking-widest uppercase animate-[pulse_2s_infinite]"
        >
          <span>Scroll</span>
          <div className="w-5 h-5 border-r-2 border-b-2 border-white/60 rotate-45"></div>
        </motion.div>
      </section>

      <div className="bg-green-deep py-10 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(45,134,83,0.3)_0%,transparent_70%)]"></div>
        <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { num: "8", label: "Core City Objectives", link: "/projects#objectives" },
              { num: "3", label: "Active Pillars of Work", link: "#pillars" },
              { num: "100%", label: "Community-Driven", link: "/get-involved" },
              { num: "2025", label: "Incorporated & Active", link: "/about" },
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="group">
                <Link href={stat.link} className="block hover:scale-105 transition-transform duration-300">
                  <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 drop-shadow-md group-hover:text-yellow-sun transition-colors duration-300">{stat.num}</span>
                  <span className="text-[0.8rem] md:text-[0.9rem] font-bold tracking-widest uppercase text-yellow-sun/90 group-hover:text-white transition-colors duration-300">{stat.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="relative py-20 md:py-32 bg-off-white overflow-hidden">
        {/* Subtle Background Pattern/Glow */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-green-pale rounded-full blur-[120px] opacity-40 -z-0 translate-x-1/3 -translate-y-1/3"></div>

        <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[480px] group"
            >
              <Image
                src="/images/seedling-nursery.png"
                alt="Acacia Melanoxylon Nursery"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 transform transition-transform duration-300 group-hover:-translate-y-2">
                <div className="text-[0.75rem] text-green-mid font-bold tracking-widest uppercase mb-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-sun animate-pulse"></span>
                  Our Signature Program
                </div>
                <div className="text-[1.1rem] font-extrabold text-charcoal m-0">Acacia Melanoxylon Nursery</div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center md:text-left"
            >
              <motion.span variants={fadeUp} className="section-label mx-auto md:mx-0">Our Mission</motion.span>
              <motion.h2 variants={fadeUp} className="section-title text-4xl md:text-5xl mb-6">Rooted in community.<br />Grown for the future.</motion.h2>
              <motion.blockquote variants={fadeUp} className="font-serif text-[1.2rem] md:text-[1.3rem] italic text-mid-text border-l-4 border-yellow-sun pl-6 my-8 leading-relaxed text-left">
                "To provide a dignified, sustainable, and wholesome functioning environment for the citizens of Sarbo Sweaken City."
              </motion.blockquote>
              <motion.p variants={fadeUp} className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                KSSCB Inc. was incorporated on May 21, 2025, with a singular focus: making Sarbo Sweaken City the cleanest and most beautiful city in all of Liberia. We believe that every citizen deserves streets they can be proud of, trees that give shade, and a city that tells the world who they are.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-charcoal/80 mb-10 leading-relaxed">
                From planting tree nurseries to erecting proper street signs and numbering every home, our work is foundational — and it starts now.
              </motion.p>
              <motion.div variants={fadeUp}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                  <Link href="/about" className="btn btn-outline-dark bg-white shadow-sm hover:shadow-md transition-all">
                    Learn Our Story →
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 bg-white" id="pillars">
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-yellow-sun/5 rounded-full blur-[100px] -z-0 -translate-x-1/2 translate-y-1/2"></div>
        <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.span variants={fadeUp} className="section-label mx-auto">What We Do</motion.span>
            <motion.h2 variants={fadeUp} className="section-title text-4xl md:text-5xl">Three Pillars of Change</motion.h2>
            <motion.p variants={fadeUp} className="section-subtitle mx-auto text-lg md:text-xl">Everything KSSCB Inc. does falls under three powerful pillars that together will transform Sarbo Sweaken City.</motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
          >
            {[
              { icon: "🌳", title: "Urban Greening & Beautification", desc: "Cultivating a nursery of trees and flowering plants for every curbside and backyard in the city. Trees for shade, oxygen, beauty, and pride.", link: "/projects#greening" },
              { icon: "🏘️", title: "Civic Infrastructure & Navigation", desc: "Numbering every home, ensuring buildings are painted, and erecting proper street signage so Sarbo Sweaken is easy to navigate and dignified.", link: "/projects#infrastructure" },
              { icon: "♻️", title: "Sanitation & Historical Preservation", desc: "Placing garbage bins at strategic intersections, and erecting identification signs for public institutions and historical landmarks.", link: "/projects#sanitation" }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(26,92,56,0.12)] p-8 md:p-10 transition-shadow duration-300 relative group overflow-hidden text-center md:text-left"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-mid to-yellow-sun opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-[70px] h-[70px] rounded-2xl flex items-center justify-center text-4xl mb-6 bg-green-pale/50 mx-auto md:mx-0 group-hover:bg-green-pale transition-colors duration-300 group-hover:scale-110">
                  {pillar.icon}
                </div>
                <h3 className="text-charcoal mb-4 text-[1.3rem] font-bold">{pillar.title}</h3>
                <p className="text-mid-text text-[1rem] leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <Link href={pillar.link} className="inline-flex items-center gap-2 font-bold text-green-mid text-[0.95rem] hover:text-green-deep group/link">
                  Learn more <motion.span className="inline-block" whileHover={{ x: 5 }}>→</motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 overflow-hidden px-4">
        {/* Deep immersive background */}
        <div className="absolute inset-0 bg-green-deep"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,134,83,0.8)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,197,24,0.15)_0%,transparent_50%)]"></div>

        <div className="w-full max-w-[800px] mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl"
          >
            <motion.span variants={fadeUp} className="section-label mx-auto !bg-yellow-sun/20 !text-yellow-sun border border-yellow-sun/30 mb-6">Make History</motion.span>
            <motion.h2 variants={fadeUp} className="text-white mt-2 mb-6 text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-sm">
              Help us make history.<br />Become a founding donor today.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg md:text-xl mb-12 leading-relaxed max-w-[600px] mx-auto">
              Every dollar you give directly funds tree seedlings, street signs, paint, sanitation supplies, and the hands that make it all happen in Sarbo Sweaken City.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link href="/get-involved" className="btn btn-donate btn-lg shadow-xl shadow-yellow-sun/20 w-full text-center block px-10">
                  💛 Get Involved
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link href="/contact" className="btn btn-outline btn-lg border-white/30 text-white hover:bg-white/10 w-full text-center block px-10">
                  Contact Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
