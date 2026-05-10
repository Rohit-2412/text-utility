import PropTypes from "prop-types";
import React from "react";

const accentMap = {
    blue: "#4f76ff",
    green: "#20c997",
    orange: "#fd7e14",
    violet: "#8b5cf6",
};

const Navbar = React.memo(function Navbar(props) {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-950/95">
            <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <a
                    href="#top"
                    className="text-xl font-semibold tracking-tight text-slate-900 transition hover:text-slate-700 dark:text-slate-100 dark:hover:text-slate-50"
                >
                    {props.title}
                </a>

                <nav className="flex flex-1 items-center justify-between gap-6">
                    <div className="hidden items-center gap-6 md:flex">
                        <a
                            href="#tools"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        >
                            Tools
                        </a>
                        <a
                            href="#about"
                            className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                        >
                            About
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-2 text-sm text-slate-600 shadow-sm shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                            <span className="font-semibold">Accent</span>
                            {Object.entries(accentMap).map(([key, color]) => (
                                <button
                                    key={key}
                                    type="button"
                                    className={`h-3.5 w-3.5 rounded-full border-2 border-white shadow-sm transition hover:scale-110 ${props.accent === key ? "ring-2 ring-offset-2 ring-white ring-opacity-90" : "opacity-80"}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => props.changeAccent(key)}
                                    aria-label={`Select ${key} accent`}
                                />
                            ))}
                        </div>

                        <div className="flex items-center gap-3 rounded-full border border-slate-200/80 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-900/5 transition dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                            <span>
                                {props.mode === "dark" ? "Dark" : "Light"}
                            </span>
                            <button
                                onClick={props.toggleMode}
                                className="relative h-6 w-11 rounded-full bg-slate-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:bg-slate-600"
                                aria-label="Toggle dark mode"
                            >
                                <span
                                    className={`absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
                                        props.mode === "dark"
                                            ? "translate-x-5"
                                            : "translate-x-0"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
});

Navbar.propTypes = {
    title: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired,
    accent: PropTypes.string.isRequired,
    changeAccent: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
    title: "Title",
};

export default Navbar;
