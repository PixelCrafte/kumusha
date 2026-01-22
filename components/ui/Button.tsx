import Link from "next/link";
import { cn } from "@/lib/utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "bg-thunderbird text-white hover:bg-roof-terracotta focus:ring-thunderbird",
  secondary: "bg-tundora text-white hover:bg-cod-gray focus:ring-tundora",
  outline:
    "border-2 border-thunderbird text-thunderbird hover:bg-thunderbird hover:text-white focus:ring-thunderbird",
  ghost: "text-tundora hover:bg-desert-storm focus:ring-tundora",
  white:
    "bg-white text-thunderbird hover:bg-desert-storm focus:ring-white",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseStyles}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
