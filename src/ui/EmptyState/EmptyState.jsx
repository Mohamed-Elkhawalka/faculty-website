export default function EmptyState({
  title = "No results found",
  description = "Try changing your search or filter.",
  onAction,
  actionLabel = "Clear filters",
}) {
  return (
    <div
      className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm"
      role="status"
      aria-live="polite"
    >
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
        {description}
      </p>

      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}