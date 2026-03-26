import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  withAnimation?: boolean;
}

export const PageWrapper = ({
  children,
  className,
  withAnimation = true,
}: PageWrapperProps) => {
  if (!withAnimation) {
    return (
      <main className={cn("min-h-screen pt-20", className)}>
        {children}
      </main>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn("min-h-screen pt-20", className)}
    >
      {children}
    </motion.main>
  );
};
