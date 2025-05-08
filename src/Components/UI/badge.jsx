const variant = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-500 text-white",
  success: "bg-green-500 text-white",
  danger: "bg-red-500 text-white",
  warning: "bg-yellow-500 text-black",
  info: "bg-teal-500 text-white",
  light: "bg-gray-200 text-black",
  dark: "bg-black text-white",
  purple: "bg-purple-500 text-white",
  pink: "bg-pink-500 text-white",
};

export default function Badge({ name, color = "primary" }) {
  return (
    <span className={`px-4 py-2 rounded-full text-sm font-medium ${variant[color]}`}>
      {name}
    </span>
  );
}