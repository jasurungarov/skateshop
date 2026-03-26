import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "white" | "muted" | "accent" | "dark";
}

export const Section = ({
  children,
  className,
  as: Component = "section",
  padding = "lg",
  background = "white",
  ...props
}: SectionProps) => {
  const paddingClasses = {
    none: "py-0",
    sm: "py-8 md:py-12",
    md: "py-12 md:py-20",
    lg: "py-20 md:py-32",
    xl: "py-32 md:py-48",
  }[padding];

  const backgroundClasses = {
    white: "bg-white",
    muted: "bg-zinc-50",
    accent: "bg-orange-600 text-white",
    dark: "bg-zinc-950 text-white",
  }[background];

  return (
    <Component
      className={cn(paddingClasses, backgroundClasses, className)}
      {...props}
    >
      {children}
    </Component>
  );
};
