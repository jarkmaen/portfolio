import image from "../assets/images/image.png";
import { NavLink } from "react-router-dom";

type Props = {
    bulletPoints: string[];
    techLabels: string[];
    title: string;
};

const ProjectCard = ({ bulletPoints, techLabels, title }: Props) => {
    return (
        <div className="card group overflow-hidden">
            <div className="h-56 overflow-hidden relative">
                <img
                    className="duration-500 group-hover:scale-105 h-full object-cover transition w-full"
                    src={image}
                />
                <div className="absolute bg-black/20 group-hover:bg-black/0 inset-0 transition"></div>
            </div>
            <div className="p-6">
                <span className="block dark:text-white font-bold mb-4 text-slate-900 text-2xl">
                    {title}
                </span>
                <ul className="dark:text-slate-300 flex flex-col gap-3 text-slate-600 text-sm mb-6">
                    {bulletPoints.map((bulletPoint, idx) => (
                        <li className="flex gap-3" key={idx}>
                            <span className="dark:text-accent-dark font-bold! material-symbols-outlined select-none text-[18px]! text-accent-light">
                                check
                            </span>
                            <span>{bulletPoint}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {techLabels.map((label, idx) => (
                        <span
                            className="bg-slate-100 border border-light dark:bg-white/5 dark:border-dark dark:text-slate-300 font-semibold px-3 py-1 rounded-full text-slate-600 text-xs"
                            key={idx}
                        >
                            {label}
                        </span>
                    ))}
                </div>
                <hr className="border-light dark:border-dark my-6" />
                <div className="flex gap-4">
                    <button className="bg-white border border-light cursor-pointer dark:bg-white/5 dark:border-dark dark:text-white flex flex-1 font-bold gap-2 hover:bg-slate-50 hover:dark:bg-white/10 items-center justify-center px-5 py-3 rounded-xl text-slate-900 text-sm transition">
                        <span className="material-symbols-outlined text-[18px]!">
                            code
                        </span>
                        <NavLink to="#">Source Code</NavLink>
                    </button>
                    <button className="bg-slate-900 border-transparent cursor-pointer dark:bg-white dark:text-slate-900 flex flex-1 font-bold gap-2 hover:bg-slate-800 hover:dark:bg-white/90 items-center justify-center px-5 py-3 rounded-xl shadow-slate-900/10 shadow-lg text-sm text-white transition">
                        <span className="material-symbols-outlined text-[18px]!">
                            rocket_launch
                        </span>
                        <NavLink to="#">Live Demo</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
