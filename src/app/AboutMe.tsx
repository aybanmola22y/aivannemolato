"use client"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import Image from "next/image"

interface AboutMeProps {
  darkMode: boolean
}

export default function AboutMe({ darkMode }: AboutMeProps) {
  return (
    <section
      id="aboutme"
      className={`py-24 px-4 min-h-screen flex items-center transition-colors duration-500 ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className={`flex items-center gap-2 ${darkMode ? "text-gray-400" : "text-slate-500"}`}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Puerto Princesa City, Palawan</span>
              </motion.div>

              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
                >
                  {"Hi, I'm"}{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    John Aivanne Molato
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className={`text-xl lg:text-2xl font-light ${darkMode ? "text-gray-300" : "text-slate-600"}`}
                >
                  Aspiring Front-end Developer & Manual QA Tester
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`space-y-6 leading-relaxed text-lg ${darkMode ? "text-gray-300" : "text-slate-700"}`}
            >
              <p>
                {
                  "I'm a fresh graduate with a degree in Information Technology, passionate about building user-friendly web interfaces and ensuring software quality. I'm currently exploring opportunities as a Frontend Developer and QA Tester, driven by a love for clean code, design, and problem-solving."
                }
              </p>
              <p>
                {
                  "When I'm not practicing code, I'm busy throwing ranked games in Mobile Legends and Dota 2. (Divine 4 Peak Rank) I call it stress relief with extra steps."
                }
              </p>
              <p>
                {
                  "Though I'm not fully professional when it comes to coding — still proudly AI-dependent — I'm learning and improving every day. Slowly but surely, I'm exploring and mastering the tech stack I only know a little about."
                }
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative elements */}
              <div
                className={`absolute -top-6 -left-6 w-64 h-64 rounded-full blur-3xl opacity-70 -z-10 ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                    : "bg-gradient-to-br from-blue-100 to-purple-100"
                }`}
              ></div>
              <div
                className={`absolute -bottom-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-70 -z-10 ${
                  darkMode
                    ? "bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                    : "bg-gradient-to-br from-blue-100 to-purple-100"
                }`}
              ></div>

              {/* Border frame */}
              <div
                className={`absolute inset-0 border-2 rounded-3xl -m-3 rotate-3 ${
                  darkMode ? "border-gray-700" : "border-slate-200"
                }`}
              ></div>

              {/* Main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  src="/meeeee.jpg"
                  alt="Profile picture"
                  width={400}
                  height={500}
                  className="object-cover w-full h-full"
                />

                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 ${
                    darkMode
                      ? "bg-gradient-to-t from-slate-900/40 to-transparent"
                      : "bg-gradient-to-t from-slate-900/20 to-transparent"
                  }`}
                ></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
