import { Home, Building2, MapPin as MapPinIcon, Briefcase } from "lucide-react";

interface PropertyImageProps {
  type: "land" | "house" | "apartment" | "office";
  alt: string;
}

export default function PropertyImage({ type, alt }: PropertyImageProps) {
  const getIcon = () => {
    switch (type) {
      case "land":
        return <MapPinIcon size={64} className="text-white" />;
      case "house":
        return <Home size={64} className="text-white" />;
      case "apartment":
        return <Building2 size={64} className="text-white" />;
      case "office":
        return <Briefcase size={64} className="text-white" />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case "land":
        return "from-green-400 to-green-600";
      case "house":
        return "from-blue-400 to-blue-600";
      case "apartment":
        return "from-purple-400 to-purple-600";
      case "office":
        return "from-orange-400 to-orange-600";
    }
  };

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${getGradient()} flex items-center justify-center`}>
      <div className="text-center">
        {getIcon()}
        <p className="text-white font-bold mt-2 text-sm uppercase tracking-wider">
          {type}
        </p>
      </div>
    </div>
  );
}
