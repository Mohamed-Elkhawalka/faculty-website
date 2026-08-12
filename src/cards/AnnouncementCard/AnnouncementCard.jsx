import { memo } from "react";

const TYPE_STYLES = {
    Important: "bg-red-50 text-red-700 ring-red-600/10",
    Academic: "bg-blue-50 text-blue-700 ring-blue-600/10",
    Students: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    General: "bg-slate-100 text-slate-700 ring-slate-600/10",
};

function AnnouncementCard({ announcement }) {
    if (!announcement) {
        return null;
    }

    const typeStyle =
        TYPE_STYLES[announcement.type] ?? TYPE_STYLES.General;

    return (
        <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 transition-all duration-300 group-hover:w-1.5" />

            <div className="pl-2">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${typeStyle}`}
                    >
                        {announcement.type}
                    </span>

                    <time
                        dateTime={announcement.date}
                        className="text-xs font-medium text-slate-400"
                    >
                        {announcement.date}
                    </time>
                </div>

                <h2 className="mb-3 text-xl font-bold leading-7 text-slate-900 transition-colors group-hover:text-blue-700">
                    {announcement.title}
                </h2>

                <p className="mb-6 line-clamp-3 text-sm leading-6 text-slate-600">
                    {announcement.description}
                </p>

                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-400">
                        University Announcement
                    </span>

                    <span className="flex items-center gap-1 text-sm font-semibold text-blue-600 transition-all duration-200 group-hover:gap-2">
                        Read more
                        <span aria-hidden="true">→</span>
                    </span>
                </div>
            </div>
        </article>
    );
}

export default memo(AnnouncementCard);