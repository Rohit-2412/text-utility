import React, { useEffect, useState } from "react";

import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const accentColors = {
    blue: "#4f76ff",
    green: "#20c997",
    orange: "#fd7e14",
    violet: "#8b5cf6",
};

function App() {
    const [mode, setMode] = useState("light");
    const [accent, setAccent] = useState("blue");
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", mode === "dark");
        document.body.style.backgroundColor =
            mode === "dark" ? "#020617" : "#eff6ff";
    }, [mode]);

    const showAlert = (message, type) => {
        setAlert({ msg: message, type });
        setTimeout(() => setAlert(null), 2200);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            showAlert("Dark mode enabled", "success");
        } else {
            setMode("light");
            showAlert("Light mode enabled", "success");
        }
    };

    const changeAccent = (color) => {
        setAccent(color);
        showAlert(
            `${color.charAt(0).toUpperCase() + color.slice(1)} accent selected`,
            "success",
        );
    };

    return (
        <div
            className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100"
            style={{ "--accent": accentColors[accent] }}
        >
            <Navbar
                title="Text Utility"
                mode={mode}
                toggleMode={toggleMode}
                accent={accent}
                changeAccent={changeAccent}
            />

            <Alert alert={alert} />

            <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
                <section
                    className="rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-8 shadow-[0_24px_80px_-32px_rgba(79,76,255,0.6)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"
                    id="top"
                >
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex rounded-full bg-gradient-to-r from-[#4f76ff] to-[#7c3aed] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-sm shadow-slate-900/10">
                            Smart text tools
                        </span>
                        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
                            Transform text with speed and style.
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Type, edit, analyze, and preview your content in an
                            elegant interface. Built-in tools include case
                            conversion, punctuation cleanup, frequency insights,
                            and a smooth dark mode.
                        </p>
                    </div>
                </section>

                <div className="mt-8 space-y-8">
                    <TextForm
                        showAlert={showAlert}
                        heading="Enter text to analyze"
                        mode={mode}
                        accent={accent}
                        id="tools"
                    />
                    <About mode={mode} />
                </div>
            </main>
        </div>
    );
}

export default App;
