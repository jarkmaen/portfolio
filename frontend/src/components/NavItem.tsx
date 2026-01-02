import { NavLink } from "react-router-dom";

type Props = {
    label: string;
    openInNew?: boolean;
    to: string;
};

const NavItem = ({ label, openInNew = false, to }: Props) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `dark:text-white flex font-medium gap-1 items-center px-3 py-2 rounded-md text-slate-900 transition 
                ${
                    isActive
                        ? "bg-slate-200 dark:bg-white/10"
                        : "dark:hover:bg-white/10 hover:bg-slate-200"
                }`
            }
        >
            <span>{label}</span>
            {openInNew && (
                <span className="material-symbols-outlined text-[16px]!">
                    open_in_new
                </span>
            )}
        </NavLink>
    );
};

export default NavItem;
