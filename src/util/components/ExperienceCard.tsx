import { fadeIn } from "../variants";
import { Panel } from "./Panel";
import { Tag, type TagColor } from "./Tag";

export interface ExperienceCardProps {
  category: string;
  categoryColor: TagColor;
  title: string;
  description: string;
  image?: string;
  imageFit?: "contain" | "cover";
  className?: string;
}

export function ExperienceCard({ category, categoryColor, title, description, image, imageFit = "cover", className = "" }: ExperienceCardProps) {
  return (
    <Panel variants={fadeIn} className={`flex flex-col overflow-hidden ${className}`}>
      <div className="flex h-[190px] items-center justify-center bg-[#0c0e1c] md:h-[200px]">
        {image ? (
          <img
            src={image}
            alt={title}
            className={`h-full w-full ${imageFit === "contain" ? "object-contain p-6" : "object-cover"}`}
          />
        ) : (
          <PlaceholderMedia />
        )}
      </div>
      <div className="flex flex-col gap-2.5 p-6">
        <Tag color={categoryColor}>{category}</Tag>
        <h3 className="font-display text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-[#b7b9d1]">{description}</p>
      </div>
    </Panel>
  );
}

function PlaceholderMedia() {
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center gap-2.5"
      style={{
        background:
          "radial-gradient(circle at 32% 28%, rgba(155,135,245,0.35), transparent 60%), radial-gradient(circle at 72% 68%, rgba(226,121,63,0.28), transparent 60%), #0c0e1c",
      }}
    >
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <line x1="8" y1="10" x2="20" y2="26" stroke="white" strokeOpacity="0.3" />
        <line x1="20" y1="26" x2="30" y2="14" stroke="white" strokeOpacity="0.3" />
        <circle cx="8" cy="10" r="2" fill="white" fillOpacity="0.6" />
        <circle cx="20" cy="26" r="2" fill="white" fillOpacity="0.6" />
        <circle cx="30" cy="14" r="2" fill="white" fillOpacity="0.6" />
      </svg>
      <span className="text-[11px] uppercase tracking-[0.1em] text-[#6b6d84]">Photo Unavailable</span>
    </div>
  );
}
