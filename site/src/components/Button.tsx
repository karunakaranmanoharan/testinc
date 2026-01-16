"use client";
import React from "react";
import Link from "next/link";
import { cn } from "../lib/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variantStyles: Record<string, string> = {
  primary:
    "bg-black text-white dark:bg-white dark:text-black hover:opacity-90 focus-visible:ring-black/20 dark:focus-visible:ring-white/20",
  secondary:
    "bg-white text-black border border-black/10 hover:bg-black/5 dark:bg-zinc-900 dark:text-white dark:border-white/10 dark:hover:bg-white/5",
  ghost:
    "bg-transparent text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5",
};

const sizeStyles: Record<string, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...props} />
  );
}

export function LinkButton({ href, className, variant = "primary", size = "md", ...props }: React.ComponentProps<typeof Link> & { variant?: ButtonProps["variant"]; size?: ButtonProps["size"]; }) {
  return (
    <Link href={href} className={cn(baseStyles, variantStyles[variant!], sizeStyles[size!], className)} {...props} />
  );
}
