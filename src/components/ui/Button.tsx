import React from "react";
import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "inline-block px-6 py-3 rounded-full font-semibold text-center transition-colors duration-300";

  const styles = {
    primary: "bg-brand-primary text-white hover:bg-opacity-90",
    ghost:
      "bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyle} ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
