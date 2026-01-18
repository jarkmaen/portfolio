import type { TechItem } from "../types";

type Props = {
    icon: string;
    isFullWidth?: boolean;
    items: TechItem[];
    title: string;
};

const StackCard = ({ icon, isFullWidth = false, items, title }: Props) => {
    return (
        <div
            className={`card ${
                isFullWidth ? "col-span-3" : ""
            } flex flex-col p-6`}
        >
            <div className="dark:text-white flex gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined select-none">
                    {icon}
                </span>
                <span className="font-bold text-lg">{title}</span>
            </div>
            <hr className="border-light dark:border-dark mt-3 mb-6" />
            <div className="flex flex-wrap gap-4">
                {items.map((item, idx) => (
                    <img
                        alt={item.title}
                        className="h-14.5 w-14.5"
                        key={idx}
                        src={item.url}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
};

export default StackCard;
