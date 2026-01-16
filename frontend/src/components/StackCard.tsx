type Props = {
    icon: string;
    isFullWidth?: boolean;
    techIcons: string[];
    title: string;
};

const StackCard = ({ icon, isFullWidth = false, techIcons, title }: Props) => {
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
                {techIcons.map((url, idx) => (
                    <img className="h-14.5 w-14.5" key={idx} src={url} />
                ))}
            </div>
        </div>
    );
};

export default StackCard;
