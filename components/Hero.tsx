"use client";

import { ArrowRight, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-5 py-2 rounded-full border border-blue-500/20">

            <Award size={18} />

            Patent Holder

          </div>

          <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

            Utkarsha

            <span className="block text-blue-500">

              Ravindra Yais

            </span>

          </h1>

          <p className="mt-6 text-xl text-slate-300 leading-9">

            Mechanical Engineer passionate about innovation,
            industrial product design and engineering research.

            Holder of multiple granted design patents across
            Mechanical Engineering, Smart Devices,
            Agricultural Equipment and Industrial Systems.

          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#patents"
              className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-full flex items-center gap-3 font-semibold"
            >
              Explore Patents

              <ArrowRight size={20} />

            </a>

            <a
              href="#about"
              className="border border-slate-600 hover:border-blue-500 transition px-8 py-4 rounded-full"
            >
              About Me
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">

            <img
              src="/images/profile.png"
              alt="Utkarsha"
              className="w-full"
            />

            <div className="p-8">

              <h2 className="text-2xl font-bold">

                Innovation Through Engineering

              </h2>

              <p className="mt-4 text-slate-400">

                Designing impactful engineering solutions
                protected through intellectual property.

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}