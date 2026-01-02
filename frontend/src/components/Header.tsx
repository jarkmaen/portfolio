import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex items-center py-9">
            <Link
                className="dark:text-white font-extrabold mr-7 text-lg text-slate-900"
                to="/"
            >
                JM.
            </Link>
            <div className="flex flex-1 gap-3">
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
            <ThemeToggle />
        </header>
    );
};

export default Header;
