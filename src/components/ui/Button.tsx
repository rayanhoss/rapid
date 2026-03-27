import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary: "bg-brand-orange hover:bg-brand-orange-light text-white shadow-glow-orange hover:shadow-glow-orange",
  secondary: "bg-white text-brand-steel hover:bg-brand-cream",
  ghost: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20",
  outline: "border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  children, href, onClick, variant = "primary", size = "md",
  className = "", external = false, type = "button", disabled = false,
}: ButtonProps) {
  const classes = clsx(
    "font-condensed tracking-widest uppercase rounded-sm transition-all duration-200 inline-flex items-center gap-2",
    variants[variant], sizes[size], className,
    disabled && "opacity-50 cursor-not-allowed"
  );

  if (href) {
    if (external) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>;
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
