"use client";

import { Award, CheckCircle2, Clock3, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";
import { patents } from "@/data/patents";

export default function Stats() {
  const grantedCount = patents.filter((p) => p.status === "Granted").length;
  const totalCount = patents.length;
  const uniqueDomains = new Set(patents.map((p) => p.category)).size;

  const stats = [
    {
      title: "Granted Patents",
      value: grantedCount,
      icon: Award,
      color: "text-blue-400",
    },
    {
      title: "Total Patents",
      value: totalCount,
      icon: CheckCircle2,
      color: "text-cyan-400",
    },
    {
      title: "Pending",
      value: 0,
      icon: Clock3,
      color: "text-orange-400",
    },
    {
      title: "Engineering Domains",
      value: uniqueDomains,
      icon: Lightbulb,
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-28 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Patent Statistics
          </h2>

          <p className="mt-4 text-slate-400">
            A quick overview of my engineering innovation journey.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => {

            const Icon = stat.icon;

            return (

              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -10,
                }}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-xl"
              >

                <Icon className={`${stat.color} mb-6`} size={38} />

                <h3 className="text-5xl font-black">
                  {stat.value}
                </h3>

                <p className="mt-4 text-slate-400">
                  {stat.title}
                </p>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
}
