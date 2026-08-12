
import events from "../../Data/events";
import EventCard from "../../Cards/EventCard/EventCard";


export default function Event() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Upcoming Events
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-gray-600">
            Discover upcoming conferences, workshops, seminars, competitions,
            and career opportunities at the Faculty of Computers and
            Information.
          </p>
        </header>

        {events.length === 0 ? (
          <div className="rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              No events available
            </h2>

            <p className="mt-2 text-gray-600">
              There are currently no upcoming events.
            </p>
          </div>
        ) : (
          <section
            aria-label="Upcoming events"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}


