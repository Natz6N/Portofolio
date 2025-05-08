import React from 'react';

export default function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 ${className}`}
      {...props}
    />
  );
}

export function Textarea({
  placeholder = "",
  value = "",
  onChange,
  className = "",
  ...props
}) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors duration-200 ${className}`}
      {...props}
    />
  );
}
