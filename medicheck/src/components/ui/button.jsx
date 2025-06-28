import React from "react";

export const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyle = "px-4 py-2 rounded-lg text-sm font-medium transition-all";
  const variantStyle =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-white hover:bg-gray-100"
      : "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};