import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const variants = {
      primary: "bg-orange-600 text-white hover:bg-orange-700 shadow-sm shadow-orange-200",
      secondary: "bg-orange-50 text-orange-600 hover:bg-orange-100",
      outline: "border-2 border-zinc-200 bg-transparent hover:border-zinc-900 hover:bg-zinc-50",
      ghost: "bg-transparent hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900",
      dark: "bg-zinc-950 text-white hover:bg-zinc-900",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base font-bold",
      lg: "px-10 py-4 text-lg font-bold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
