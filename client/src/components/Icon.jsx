import * as LucideIcons from "lucide-react";

export default function Icon({ name, className, onClick }) {
  const LucideIcon = LucideIcons[name];

  if (!LucideIcon) return null;

  return <LucideIcon onClick={onClick} className={className} />;
}
