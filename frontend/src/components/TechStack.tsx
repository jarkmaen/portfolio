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
                    headerIcon="desktop_windows"
                    techIcons={data.frontend}
                    title="Frontend"
                />
                <TechStackCard
                    headerIcon="dns"
                    techIcons={data.backend}
                    title="Backend"
                />
                <TechStackCard
                    headerIcon="language"
                    techIcons={data.webDev}
                    title="Web Dev"
                />
                <TechStackCard
                    headerIcon="bug_report"
                    techIcons={data.testing}
                    title="Testing & Automation"
                />
                <TechStackCard
                    headerIcon="code"
                    techIcons={data.languages}
                    title="Programming Languages"
                />
                <TechStackCard
                    headerIcon="database"
                    techIcons={data.databases}
                    title="Databases"
                />
                <TechStackCard
                    headerIcon="cloud"
                    isFullWidth={true}
                    techIcons={data.devOps}
                    title="Version Control, CI/CD & Cloud Services"
                />
            </div>
        </>
    );
};

export default TechStack;
