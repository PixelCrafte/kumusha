import { cn } from "@/lib/utils/cn";

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg" | "xl";
  muted?: boolean;
  as?: "p" | "span" | "div";
}

const sizeStyles = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export function Text({
  children,
  className,
  size = "base",
  muted = false,
  as: Component = "p",
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        sizeStyles[size],
        "leading-relaxed",
        muted && "text-stack",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
