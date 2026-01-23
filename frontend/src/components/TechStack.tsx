import * as data from "../data/techStack";
import TechStackCard from "./TechStackCard";

const TechStack = () => {
    return (
        <>
            <div className="dark:text-white flex gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined select-none text-3xl!">
                    layers
                </span>
                <h4 className="font-bold text-3xl">My Tech Stack</h4>
            </div>
            <div className="gap-4 grid grid-cols-3">
                <TechStackCard
                    icon="desktop_windows"
                    items={data.frontend}
                    title="Frontend"
                />
                <TechStackCard
                    icon="dns"
                    items={data.backend}
                    title="Backend"
                />
                <TechStackCard
                    icon="language"
                    items={data.webDev}
                    title="Web Dev"
                />
                <TechStackCard
                    icon="bug_report"
                    items={data.testing}
                    title="Testing & Automation"
                />
                <TechStackCard
                    icon="code"
                    items={data.languages}
                    title="Programming Languages"
                />
                <TechStackCard
                    icon="database"
                    items={data.databases}
                    title="Databases"
                />
                <TechStackCard
                    icon="cloud"
                    isFullWidth={true}
                    items={data.devOps}
                    title="Version Control, CI/CD & Cloud Services"
                />
            </div>
        </>
    );
};

export default TechStack;
