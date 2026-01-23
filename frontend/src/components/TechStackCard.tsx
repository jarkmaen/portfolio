import type { TechIcon } from "../types";

type Props = {
    headerIcon: string;
    isFullWidth?: boolean;
    techIcons: TechIcon[];
    title: string;
};

const TechStackCard = ({
    headerIcon,
    isFullWidth = false,
    techIcons,
    title
}: Props) => {
    return (
        <div
            className={`card ${
                isFullWidth ? "col-span-3" : ""
            } flex flex-col p-6`}
        >
            <div className="dark:text-white flex gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined select-none">
                    {headerIcon}
                </span>
                <span className="font-bold text-lg">{title}</span>
            </div>
            <hr className="border-light dark:border-dark mt-3 mb-6" />
            <div className="flex flex-wrap gap-4 select-none">
                {techIcons.map((icon, idx) => (
                    <div key={idx} title={icon.title}>
                        {icon.Icon ? (
                            <icon.Icon />
                        ) : (
                            <img
                                alt={icon.title}
                                className="h-14.5 w-14.5"
                                src={icon.url}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStackCard;
