import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export const Card = ({
  children,
  className,
  hover = true,
  padding = "md",
  ...props
}: CardProps) => {
  const paddingClasses = {
    none: "p-0",
    sm: "p-4",
    md: "p-6",
    lg: "p-8 md:p-12",
  }[padding];

  return (
    <div
      className={cn(
        "bg-white rounded-[2rem] border border-zinc-100 shadow-sm transition-all duration-300",
        hover && "hover:shadow-xl hover:shadow-zinc-200/50 hover:-translate-y-1",
        paddingClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
