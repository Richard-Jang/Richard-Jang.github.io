import type { ReactNode } from "react";

export type TagColor = "neutral" | "violet" | "orange" | "blue" | "muted";

const colorClasses: Record<TagColor, string> = {
  neutral: "border-white/16 text-[#cfd0e0]",
  violet: "border-[#9b87f5]/60 text-[#9b87f5]",
  orange: "border-[#e2793f]/60 text-[#e2793f]",
  blue: "border-[#5cc8ff]/60 text-[#5cc8ff]",
  muted: "border-dashed border-white/25 text-white/50",
};

export function Tag({ color = "neutral", className = "", children }: { color?: TagColor; className?: string; children: ReactNode }) {
  return (
    <span className={`inline-flex w-fit items-center rounded-full border px-4 py-1.5 text-xs ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  );
}
