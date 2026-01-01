import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center">
            <Link
                className="dark:text-white font-bold mr-6 text-lg text-slate-900"
                to="/"
            >
                JM.
            </Link>
            <div className="flex flex-1 gap-1">
                <NavItem label="Home" to="/" />
                <NavItem label="Projects" to="projects" />
                <NavItem
                    label="GitHub"
                    openInNew={true}
                    to="https://github.com/jarkmaen"
                />
                <NavItem
                    label="LinkedIn"
                    openInNew={true}
                    to="https://linkedin.com/in/jarkko-m%C3%A4enrinta/"
                />
            </div>
            <button className="flex hover:cursor-pointer">
                <span className="material-symbols-outlined">dark_mode</span>
            </button>
        </header>
    );
};

export default Header;
