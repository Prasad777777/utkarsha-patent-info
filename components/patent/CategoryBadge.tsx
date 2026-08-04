interface Props {
    category: string;
  }
  
  const colors: Record<string, string> = {
    Mechanical: "bg-blue-500",
    Agriculture: "bg-green-500",
    Robotics: "bg-purple-500",
    "Smart Devices": "bg-orange-500",
    "Industrial Design": "bg-pink-500",
  };
  
  const icons: Record<string, string> = {
    Mechanical: "⚙️",
    Agriculture: "🌱",
    Robotics: "🤖",
    "Smart Devices": "🔒",
    "Industrial Design": "🏭",
  };
  
  export default function CategoryBadge({ category }: Props) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white ${colors[category]}`}
      >
        {icons[category]}
        {category}
      </span>
    );
  }