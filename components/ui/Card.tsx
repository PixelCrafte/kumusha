import { cn } from "@/lib/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  hover = false,
  padding = "md",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-border shadow-sm",
        hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
        paddingStyles[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn(className)}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-border", className)}>
      {children}
    </div>
  );
}
