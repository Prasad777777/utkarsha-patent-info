"use client";

import Image from "next/image";
import { Patent } from "@/types/patent";
import {
  Calendar,
  BadgeCheck,
  Download,
  Eye,
} from "lucide-react";

interface PatentCardProps {
  patent: Patent;
}

export default function PatentCard({ patent }: PatentCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

{/* Patent Thumbnail */}

<div className="relative w-full h-[420px] overflow-hidden rounded-t-3xl bg-white">

  <a
    href={patent.pdf}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <Image
      src={patent.thumbnail}
      alt={patent.title}
      width={600}
      height={850}
      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
    />
  </a>

  <div className="absolute left-4 top-4 z-10">
    <span className="flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
      <BadgeCheck size={16} />
      {patent.status}
    </span>
  </div>

</div>

      {/* Card Body */}
      <div className="p-6">

        <p className="text-sm font-semibold text-blue-400">
          Class {patent.patentClass}
        </p>

        <h2 className="mt-2 text-2xl font-bold leading-tight">
          {patent.title}
        </h2>

        {/* Patent Details */}
        <div className="mt-6 space-y-3">

          <div className="flex justify-between">
            <span className="text-slate-400">
              Design No.
            </span>

            <span className="font-medium">
              {patent.designNo}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-400">
              Registered
            </span>

            <span className="flex items-center gap-2 font-medium">
              <Calendar size={16} />
              {patent.registrationDate}
            </span>
          </div>

        </div>

        {/* Inventors */}
        <div className="mt-6">

          <h3 className="mb-3 text-sm uppercase tracking-widest text-slate-400">
            Inventors
          </h3>

          <div className="flex flex-wrap gap-2">

            {patent.inventors.map((inventor) => (
              <span
                key={inventor}
                className="rounded-full bg-slate-800 px-3 py-1 text-xs"
              >
                {inventor}
              </span>
            ))}

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <a
            href={patent.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            <Eye size={18} />
            View
          </a>

          <a
            href={patent.pdf}
            download
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 font-semibold transition hover:border-blue-500"
          >
            <Download size={18} />
            Download
          </a>

        </div>

      </div>
    </div>
  );
}