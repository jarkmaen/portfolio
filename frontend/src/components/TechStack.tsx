import StackCard from "./StackCard";

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
                <StackCard
                    icon="desktop_windows"
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                    ]}
                    title="Frontend"
                />
                <StackCard
                    icon="dns"
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg"
                    ]}
                    title="Backend"
                />
                <StackCard
                    icon="web"
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    ]}
                    title="Web Dev"
                />
                <StackCard
                    icon="build_circle"
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg"
                    ]}
                    title="Testing & Automation"
                />
                <StackCard
                    icon="code"
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                    ]}
                    title="Programming Languages"
                />
                <StackCard
                    icon="database"
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                    ]}
                    title="Databases"
                />
                <StackCard
                    icon="cloud_done"
                    isFullWidth={true}
                    techIcons={[
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
                        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                    ]}
                    title="Version Control, CI/CD & Cloud Services"
                />
            </div>
        </>
    );
};

export default TechStack;
