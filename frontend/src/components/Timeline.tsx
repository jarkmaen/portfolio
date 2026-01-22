import TimelineItem from "./TimelineItem";

const Timeline = () => {
    return (
        <>
            <div className="dark:text-white flex gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined select-none text-3xl!">
                    timeline
                </span>
                <h4 className="font-bold text-3xl">My Developer Journey</h4>
            </div>
            <div className="relative">
                <div className="absolute bg-(--border-color-light) bottom-0 dark:bg-(--border-color-dark) left-1/2 top-0 w-px" />
                <div className="flex flex-col gap-9">
                    <TimelineItem
                        description="TBA"
                        icon="school"
                        label="MS Computer Science"
                        period="2023 - 2025"
                        subLabel="University of Helsinki"
                    />
                    <TimelineItem
                        description="TBA"
                        icon="school"
                        isLeft={true}
                        label="BS Computer Science"
                        period="2020 - 2023"
                        subLabel="University of Helsinki"
                    />
                    <TimelineItem
                        description="TBA"
                        icon="code"
                        label="Software Developer Trainee"
                        period="Jan 2018 - May 2018"
                        subLabel="Evitec Solutions"
                    />
                </div>
            </div>
        </>
    );
};

export default Timeline;
