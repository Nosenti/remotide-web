import PropTypes from "prop-types";

const sizeClasses = {
  small: "text-xs px-2 py-1 uppercase font-semibold text-center",
  medium: "text-base px-6 py-3 font-medium",
  inputSize: "text-base px-4 py-2 font-medium",
  large: "text-lg px-8 py-3 font-medium",
};
const variationClasses = {
  primary: {
    default: "text-colorBrand50 bg-colorBrand600",
    hover: "hover:bg-colorBrand700",
  },
  secondary: {
    default: "text-gray-600 bg-gray-100 border border-gray-200",
    hover: "hover:bg-gray-200",
  },
  danger: {
    default: "text-red-100 bg-red-700",
    hover: "hover:bg-red-800",
  },
};

function Button({ variation = "primary", size = "medium", ...props }) {
  return (
    <button
      className={`rounded shadow-sm ${sizeClasses[size]} ${variationClasses[variation].default} ${variationClasses[variation].hover}`}
      {...props}
    />
  );
}

Button.propTypes = {
  variation: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "inputSize", "large"]),
  // You can add validation for other props as necessary
};

export default Button;
