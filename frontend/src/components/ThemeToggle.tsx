import useDarkMode from "../hooks/useDarkMode";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useDarkMode();

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            className="cursor-pointer dark:hover:bg-white/10 dark:text-white flex hover:bg-slate-200 p-2 rounded-md text-slate-900 transition"
            onClick={toggleTheme}
        >
            <span className="dark:hidden! material-symbols-outlined">
                dark_mode
            </span>
            <span className="dark:inline! hidden! material-symbols-outlined">
                light_mode
            </span>
        </button>
    );
};

export default ThemeToggle;
