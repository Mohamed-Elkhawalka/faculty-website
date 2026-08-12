import { memo } from "react";
function Filter({
    value,
    onChange,
    options,
    label = "Filter",
    id = "filter",
}) {
    return (
        <div className="w-full">
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            <select
                id={id}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-gray-900 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}
export default memo(Filter);