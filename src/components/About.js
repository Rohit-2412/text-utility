import React from "react";

const About = React.memo(function About({ mode }) {
    return (
        <section
            className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] transition-colors duration-300 dark:border-slate-700/90 dark:bg-slate-900/85"
            id="about"
        >
            <div className="max-w-3xl space-y-4">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                    Powerful text utilities for every workflow
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                    Create polished content faster with smart tools for
                    formatting, analysis, and preview. Text Utility is built to
                    stay fast, clean, and easy to use.
                </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
                {[
                    {
                        title: "Speedy editing",
                        description:
                            "Apply case changes, remove punctuation, collapse whitespace, and copy content instantly.",
                    },
                    {
                        title: "Instant insights",
                        description:
                            "View word count, sentence count, reading time, unique words, and top word frequency as you type.",
                    },
                    {
                        title: "Modern experience",
                        description:
                            "Switch themes, choose accent colors, and enjoy a polished editor built for clarity.",
                    },
                ].map((card) => (
                    <article
                        key={card.title}
                        className="rounded-3xl border border-slate-200/70 bg-slate-50 p-6 shadow-sm shadow-slate-900/5 transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-950/80"
                    >
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                            {card.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
});

export default About;
