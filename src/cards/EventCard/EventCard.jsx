
export default function EventCard({ event }) {
  if (!event) {
    return null;
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
          {event.type}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <time
          dateTime={event.date}
          className="mb-3 text-sm font-medium text-blue-600"
        >
          {event.date}
        </time>

        <h2 className="mb-3 text-xl font-bold leading-snug text-gray-900">
          {event.title}
        </h2>

        <p className="mb-6 flex-1 text-sm leading-6 text-gray-600">
          {event.description}
        </p>

        <div className="space-y-3 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>{event.time}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </article>
  );
}



