import { cn } from "@/lib/utils/cn";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  as?: `h${HeadingLevel}`;
}

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  2: "text-3xl md:text-4xl font-bold tracking-tight",
  3: "text-2xl md:text-3xl font-semibold",
  4: "text-xl md:text-2xl font-semibold",
  5: "text-lg md:text-xl font-medium",
  6: "text-base md:text-lg font-medium",
};

export function Heading({ level, children, className, as, ...props }: HeadingProps) {
  const Component = as || (`h${level}` as `h${HeadingLevel}`);

  return (
    <Component className={cn(headingStyles[level], className)} {...props}>
      {children}
    </Component>
  );
}
