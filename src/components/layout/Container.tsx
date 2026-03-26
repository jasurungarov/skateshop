import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export const Container = ({
  children,
  className,
  as: Component = "div",
  size = "lg",
  ...props
}: ContainerProps) => {
  const maxWidthClass = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-xl", // standard container size
    xl: "max-w-screen-2xl",
    full: "max-w-full",
  }[size];

  return (
    <Component
      className={cn(
        "mx-auto px-4 md:px-6 lg:px-8 w-full",
        maxWidthClass,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};
