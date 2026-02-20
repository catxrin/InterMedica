export default function ErrorMessage({ message, className }) {
  return (
    <p className={`text-red-800 sm:text-sm font-medium text-xs ${className}`}>{message}</p>
  );
}
