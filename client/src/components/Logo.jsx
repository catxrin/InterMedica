import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <div className="flex size-9 items-center justify-center rounded-lg bg-primary">
        <ShieldCheck className="size-5 text-white" />
      </div>
      <span className="font-sans text-lg font-bold">InterMedica</span>
    </Link>
  );
}
