import type { ComponentPropsWithoutRef } from "react";

const fieldClass =
  "rounded-[10px] border border-white/18 bg-white/5 px-3.5 py-3 text-sm text-[#f4f3f9] outline-none transition-colors focus:border-[var(--accent)]";
const labelClass = "text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8a8ca3]";

export function FormField({ label, ...props }: { label: string } & ComponentPropsWithoutRef<"input">) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      <input className={fieldClass} {...props} />
    </label>
  );
}

export function FormTextarea({ label, ...props }: { label: string } & ComponentPropsWithoutRef<"textarea">) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className={labelClass}>{label}</span>
      <textarea className={fieldClass} {...props} />
    </label>
  );
}
