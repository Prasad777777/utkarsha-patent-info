"use client";

import { useMemo, useState } from "react";
import PatentCard from "./PatentCard";
import { patents } from "@/data/patents";

const categories = [
  "All",
  "Mechanical",
  "Agriculture",
  "Robotics",
  "Smart Devices",
  "Industrial Design",
];

export default function PatentGrid() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPatents = useMemo(() => {
    return patents.filter((patent) => {
      const matchesSearch =
        patent.title.toLowerCase().includes(search.toLowerCase()) ||
        patent.designNo.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" ||
        patent.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <section
      id="patents"
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Patent Portfolio
          </h2>

          <p className="text-slate-400 mt-4">
            Explore my granted engineering design patents.
          </p>

        </div>

        {/* Search */}

        <div className="mt-12">

          <input
            type="text"
            placeholder="Search patent..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-900
            px-5
            py-4
            outline-none
            focus:border-blue-500
            "
          />

        </div>

        {/* Filters */}

        <div className="mt-8 flex flex-wrap gap-4 justify-center">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full transition
              ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Patent Grid */}

        <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {filteredPatents.length > 0 ? (

            filteredPatents.map((patent) => (

              <PatentCard
                key={patent.id}
                patent={patent}
              />

            ))

          ) : (

            <div className="col-span-full text-center">

              <h3 className="text-2xl font-semibold">

                No patents found

              </h3>

              <p className="text-slate-500 mt-3">

                Try another keyword or category.

              </p>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}