type Props = {
    description: string;
    icon: string;
    isLeft?: boolean;
    label: string;
    period: string;
    subLabel: string;
};

const TimelineItem = ({
    description,
    icon,
    isLeft = false,
    label,
    period,
    subLabel
}: Props) => {
    return (
        <div className="flex group items-center">
            <div className="-translate-x-1/2 absolute bg-white border-2 border-light dark:bg-surface-dark dark:border-dark dark:group-hover:border-white flex group-hover:border-slate-900 h-8 items-center justify-center left-1/2 rounded-full select-none transition w-8 z-10">
                <span className="dark:group-hover:text-white dark:text-gray-400 group-hover:text-slate-900 material-symbols-outlined text-base! text-slate-400 transition">
                    {icon}
                </span>
            </div>
            <div
                className={`${isLeft ? "pr-19 text-right" : "ml-auto pl-19 text-left"} w-1/2`}
            >
                <div className="card p-5">
                    <span className="block dark:text-white font-bold text-slate-900 text-sm tracking-wider">
                        {period}
                    </span>
                    <span className="block dark:text-white font-bold my-1 text-slate-900 text-xl">
                        {label}
                    </span>
                    <span className="block dark:text-slate-400 text-slate-500 text-sm">
                        {subLabel}
                    </span>
                    <p className="dark:text-slate-400 leading-relaxed mt-3 text-slate-500 text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TimelineItem;
