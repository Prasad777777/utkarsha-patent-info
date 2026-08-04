"use client";

import { useState } from "react";

interface Props {
  inventors: string[];
}

export default function InventorList({ inventors }: Props) {
  const [expanded, setExpanded] = useState(false);

  const visible = expanded ? inventors : inventors.slice(0, 3);

  return (
    <div className="mt-5">

      <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-slate-400">
        Inventors
      </h4>

      <div className="space-y-2">

        {visible.map((person) => (
          <div
            key={person}
            className="rounded-lg bg-slate-800 px-3 py-2 text-sm"
          >
            👤 {person}
          </div>
        ))}

      </div>

      {inventors.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-blue-400 hover:text-blue-300"
        >
          {expanded ? "Show Less" : `+${inventors.length - 3} More`}
        </button>
      )}

    </div>
  );
}