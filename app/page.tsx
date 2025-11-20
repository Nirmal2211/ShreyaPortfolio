"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import Link from "next/link";

// Local resume image (kept as decorative background only; not shown as profile photo)

export default function Page() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);
    const container = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
    };

    const item: any = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 18 } },
    };

    return (
        <div className={dark ? "dark" : "light"}>
            <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-black transition-colors">
                {/* Decorative blurred resume background (aria-hidden) */}
                <img
                    src={'/resume.png'}
                    alt="decor"
                    aria-hidden
                    className="pointer-events-none fixed inset-0 m-auto w-[90%] max-w-4xl opacity-10 dark:opacity-6 blur-3xl scale-[1.02] rotate-0 select-none"
                    style={{ zIndex: 0 }}
                />

                <header className="relative z-10 max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
                    <div>
                        <img src='/name.png' className='w-41 h-20  items-center object-cover' />
                        {/*// <button*/}
                        {/*//     onClick={() => setDark((d) => !d)}*/}
                        {/*//     aria-label="Toggle theme"*/}
                        {/*//     className="group inline-flex items-center gap-3 rounded-full px-4 py-2 bg-white/70 dark:bg-zinc-800/60 shadow-sm backdrop-blur-sm border border-black/5 dark:border-white/6"*/}
                        {/*// >*/}
                        {/*//     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                        {/*//         <path d="M12 3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M12 19v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M4.22 4.22l1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M18.36 18.36l1.42 1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M1 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M21 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M4.22 19.78l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//         <path d="M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />*/}
                        {/*//     </svg>*/}
                        {/*//     <span className="text-sm font-medium">{dark ? "Dark" : "Light"}</span>*/}
                        {/*// </button>*/}
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        <a href="#about" className="hover:underline">About</a>
                        <a href="#skills" className="hover:underline">Skills</a>
                        <a href="#projects" className="hover:underline">Projects</a>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </nav>
                </header>

                <main className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
                    <motion.section initial="hidden" animate="show" variants={container} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        {/* Left column: Hero */}
                        <motion.div variants={item} className="md:col-span-7 bg-white/80 dark:bg-black/60 backdrop-blur-sm rounded-3xl p-10 shadow-md border border-black/5 dark:border-white/6">
                            <div className="flex flex-col gap-6">
                                <img src={'/myProfile.png'} className="h-100 w-100 border-b-2 border-white-200 rounded-3xl object-cover"/>

                                <div>
                                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">Shreya Bhayani</h1>
                                    <p className="mt-2 text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-medium">Full Stack Developer</p>
                                </div>

                                <motion.p variants={item} className="text-zinc-700 dark:text-zinc-300 leading-7">
                                    I build reliable, maintainable web applications with a focus on clarity, performance and delightful UI —
                                    specializing in PHP & MySQL for backend, and modern frontend frameworks for responsive, interactive experiences.
                                </motion.p>

                                <div className="flex flex-wrap gap-3">
                                    <a href="https://github.com/shreyabhayani" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium hover:scale-[1.02] transition">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.999 5.23.999 11.5c0 4.61 3.01 8.53 7.19 9.92.53.1.73-.23.73-.5 0-.25-.01-.92-.01-1.8-2.93.64-3.55-1.42-3.55-1.42-.48-1.22-1.17-1.54-1.17-1.54-.96-.66.07-.65.07-.65 1.06.08 1.63 1.1 1.63 1.1.94 1.61 2.47 1.15 3.07.88.1-.69.37-1.15.67-1.41-2.34-.27-4.8-1.17-4.8-5.22 0-1.15.41-2.09 1.09-2.83-.11-.27-.47-1.36.1-2.84 0 0 .89-.29 2.92 1.08a10.2 10.2 0 0 1 2.66-.36c.9 0 1.81.12 2.66.36 2.03-1.37 2.92-1.08 2.92-1.08.57 1.48.21 2.57.1 2.84.68.74 1.09 1.68 1.09 2.83 0 4.06-2.47 4.95-4.82 5.21.38.33.72.98.72 1.98 0 1.43-.01 2.59-.01 2.95 0 .28.19.61.74.5C20 20.03 23 16.1 23 11.5 23 5.23 18.27.5 12 .5z" fill="currentColor"/></svg>
                                        <span>View code</span>
                                    </a>

                                    <a href="https://www.linkedin.com/in/shreya-bhayani-6a4b5c/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:scale-[1.02] transition">
                                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.1c.5-.9 1.7-1.8 3.6-1.8 3.8 0 4.5 2.5 4.5 5.8V21H17v-5.1c0-1.3 0-3-1.8-3s-2 1.4-2 2.9V21H9z" fill="currentColor"/></svg>
                                        <span>LinkedIn</span>
                                    </a>
                                </div>

                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="rounded-lg p-4 bg-zinc-50 dark:bg-zinc-900/40 border border-black/5 dark:border-white/6">
                                        <h4 className="text-xs font-semibold uppercase text-zinc-500">Location</h4>
                                        <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Surat, Gujarat, India</p>
                                    </div>

                                    <div className="rounded-lg p-4 bg-zinc-50 dark:bg-zinc-900/40 border border-black/5 dark:border-white/6">
                                        <h4 className="text-xs font-semibold uppercase text-zinc-500">Email</h4>
                                        <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">shreyabhayani645@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right column: Details */}
                        <motion.aside variants={item} className="md:col-span-5 flex flex-col gap-6">
                            <div id="about" className="rounded-2xl p-6 bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-black/5 dark:border-white/6 shadow-sm">
                                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">About</h3>
                                <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 leading-6">
                                    I'm a Full-Stack Developer specializing in PHP with a strong understanding of web development, database design, and building scalable web applications. I work with modern frontend frameworks and prioritize clean code and performance.
                                </p>
                            </div>

                            <div id="skills" className="rounded-2xl p-6 bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-black/5 dark:border-white/6 shadow-sm">
                                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Skills</h3>
                                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                    <li>PHP</li>
                                    <li>MySQL</li>
                                    <li>JavaScript (ES6+)</li>
                                    <li>HTML5 & CSS3</li>
                                    <li>Tailwind CSS & Bootstrap</li>
                                    <li>React / Next.js</li>
                                    <li>Git & GitHub</li>
                                    <li>Microsoft Office</li>
                                </ul>
                            </div>

                            <div id="education" className="rounded-2xl p-6 bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-black/5 dark:border-white/6 shadow-sm">
                                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Education</h3>
                                <div className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                                    <p className="font-semibold">Bachelor of Computer Applications</p>
                                    <p className="text-xs mt-1">Saurashtra University, Rajkot — 2022 to 2025 | CGPA 7.13</p>
                                </div>
                            </div>

                            <div id="projects" className="rounded-2xl p-6 bg-white/70 dark:bg-black/60 backdrop-blur-sm border border-black/5 dark:border-white/6 shadow-sm">
                                <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Projects</h3>
                                <ul className="mt-3 text-sm text-zinc-700 dark:text-zinc-300 list-disc pl-5 space-y-2">
                                    <li><span className="font-semibold">Hotel Management System</span> — Full CRUD app with rooms, bookings, and image uploads.</li>
                                    <li><span className="font-semibold">To-do List</span> — Modern React app with local persistence and filters.</li>
                                    <li><span className="font-semibold">E-commerce Site</span> — Product listing, cart, and basic checkout flow.</li>
                                </ul>
                            </div>
                        </motion.aside>
                    </motion.section>

                    {/* Call to action + Contact */}
                    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-12 rounded-2xl p-8 bg-gradient-to-r from-zinc-50 to-white/60 dark:from-zinc-900 dark:to-black/60 backdrop-blur-sm border border-black/5 dark:border-white/6 shadow-md">
                        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Let’s build something great together</h4>
                                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">Available for internships and full-time roles — open to freelance opportunities.</p>
                            </div>

                            <div className="flex gap-3">
                                <a href="mailto:shreyabhayani645@gmail.com" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900 text-white font-medium hover:scale-[1.02] transition">Email me</a>
                                <a href="/shreya-bhayani.pdf" className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium hover:bg-zinc-100/60 transition">Download CV</a>
                            </div>
                        </div>
                    </motion.section>

                    <footer id="contact" className="mt-10 text-center text-sm text-zinc-600 dark:text-zinc-400">
                        <p>© {new Date().getFullYear()} Shreya Bhayani — Full Stack Developer • <a href="https://www.linkedin.com/in/shreya-bhayani-6a4b5c/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a></p>
                    </footer>
                </main>
            </div>
        </div>
    );
}
