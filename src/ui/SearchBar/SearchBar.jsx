
export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  label = "Search",
}) {
  return (
    <div className="w-full">
      <label
        htmlFor="search-input"
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id="search-input"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
      />
    </div>
  );
}

