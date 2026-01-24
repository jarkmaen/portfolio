import ProjectCard from "./ProjectCard";

const FeaturedProjects = () => {
    return (
        <>
            <div className="dark:text-white flex gap-3 items-center text-slate-900">
                <span className="material-symbols-outlined select-none text-3xl!">
                    grid_view
                </span>
                <h4 className="font-bold text-3xl">Featured Projects</h4>
            </div>
            <div className="gap-6 grid grid-cols-2">
                <ProjectCard
                    bulletPoints={[
                        "Bullet point 1",
                        "Bullet point 2",
                        "Bullet point 3"
                    ]}
                    techLabels={["React", "Node.js", "TypeScript"]}
                    title="TBA"
                />
                <ProjectCard
                    bulletPoints={[
                        "Bullet point 1",
                        "Bullet point 2",
                        "Bullet point 3"
                    ]}
                    techLabels={["React", "Node.js", "TypeScript"]}
                    title="TBA"
                />
            </div>
            <div className="flex justify-center">
                <button className="bg-slate-900 border border-transparent cursor-pointer dark:bg-surface-dark dark:border-dark flex font-bold gap-2 group hover:bg-slate-800 hover:dark:bg-surface-dark hover:dark:border-white/50 px-10 py-4 rounded-full shadow-slate-900/10 shadow-xl text-white transition">
                    <span>View All Projects</span>
                    <span className="font-bold! group-hover:translate-x-1 material-symbols-outlined text-xl! transition">
                        arrow_right_alt
                    </span>
                </button>
            </div>
        </>
    );
};

export default FeaturedProjects;
