import { cn } from "@/lib/utils/cn";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "muted" | "dark" | "primary";
}

const backgroundStyles = {
  white: "bg-white",
  muted: "bg-desert-storm",
  dark: "bg-cod-gray text-white",
  primary: "bg-thunderbird text-white",
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", backgroundStyles[background], className)}
    >
      {children}
    </section>
  );
}
