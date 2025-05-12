import React from 'react';

export default function Button({
  children,
  variant = "primary",
  size = "md",
  outline = false,
  rounded = false,
  disabled = false,
  fullWidth = false,
  className = "",
  ...props
}) {
  // Define variant styles
  const variants = {
    primary: outline 
      ? "border border-indigo-500 text-indigo-500 hover:bg-indigo-50" 
      : "bg-indigo-500 text-white hover:bg-indigo-600",
    secondary: outline 
      ? "border border-gray-500 text-gray-500 hover:bg-gray-50" 
      : "bg-gray-500 text-white hover:bg-gray-600",
    success: outline 
      ? "border border-green-500 text-green-500 hover:bg-green-50" 
      : "bg-green-500 text-white hover:bg-green-600",
    danger: outline 
      ? "border border-red-500 text-red-500 hover:bg-red-50" 
      : "bg-red-500 text-white hover:bg-red-600",
    warning: outline 
      ? "border border-yellow-500 text-yellow-600 hover:bg-yellow-50" 
      : "bg-yellow-500 text-white hover:bg-yellow-600",
    info: outline 
      ? "border border-sky-500 text-sky-500 hover:bg-sky-50" 
      : "bg-sky-500 text-white hover:bg-sky-600",
    light: outline 
      ? "border border-gray-200 text-gray-500 hover:bg-gray-50" 
      : "bg-gray-100 text-gray-800 hover:bg-gray-200",
    dark: outline 
      ? "border border-gray-800 text-gray-800 hover:bg-gray-50" 
      : "bg-gray-800 text-white hover:bg-gray-900",
    link: "text-blue-500 hover:text-blue-700 hover:underline"
  };

  // Define size styles
  const sizes = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-1.5",
    md: "px-4 py-2",
    lg: "text-lg px-5 py-2.5",
    xl: "text-xl px-6 py-3"
  };

  // Build the class string
  const buttonClasses = [
    "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
    variant === "link" ? "" : sizes[size],
    variants[variant],
    rounded ? "rounded-full" : "rounded",
    disabled ? "opacity-60 cursor-not-allowed" : "",
    fullWidth ? "w-full" : "",
    className
  ].join(" ");

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}