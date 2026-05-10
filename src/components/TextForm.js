import React, { useMemo, useState } from "react";

const TextForm = React.memo(function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
    };

    const handleLoClick = () => {
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    };

    const handleCapitalize = () => {
        const arr = text
            .split(" ")
            .map((word) =>
                word.length > 0
                    ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                    : "",
            );
        setText(arr.join(" ").trim());
        props.showAlert("Capitalized each word", "success");
    };

    const handleSentenceCase = () => {
        const sentences = text
            .split(/([.!?]\s*)/)
            .map((piece) => {
                return piece.trim().length === 0
                    ? piece
                    : piece.charAt(0).toUpperCase() +
                          piece.slice(1).toLowerCase();
            })
            .join("");
        setText(sentences);
        props.showAlert("Applied sentence case", "success");
    };

    const handleToggleCase = () => {
        const toggled = text
            .split("")
            .map((char) => {
                if (char === char.toUpperCase()) return char.toLowerCase();
                return char.toUpperCase();
            })
            .join("");
        setText(toggled);
        props.showAlert("Toggled case", "success");
    };

    const handleRemovePunctuation = () => {
        const newText = text.replace(/[^\w\s]/g, "");
        setText(newText);
        props.showAlert("Removed punctuation", "success");
    };

    const handleExtraSpaces = () => {
        const newText = text.split(/[ ]+/).join(" ");
        setText(newText.trim());
        props.showAlert("Removed extra spaces", "success");
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard", "success");
    };

    const handleDownload = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "text-utility-export.txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        props.showAlert("Text downloaded as .txt file", "success");
    };

    const handleSort = () => {
        const sorted = text
            .split(/\s+/)
            .filter((element) => element.length !== 0)
            .sort((a, b) => a.localeCompare(b));
        setText(sorted.join(" "));
        props.showAlert("Sorted words alphabetically", "success");
    };

    const handleClearClick = () => {
        setText("");
        props.showAlert("Cleared text", "warning");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const words = useMemo(
        () => text.split(/\s+/).filter((element) => element.length !== 0),
        [text],
    );
    const charactersWithoutSpaces = text.replace(/\s/g, "").length;
    const sentenceCount = useMemo(
        () =>
            text
                .split(/[.!?]+/)
                .filter((sentence) => sentence.trim().length !== 0).length,
        [text],
    );
    const paragraphCount = useMemo(
        () =>
            text
                .split(/\n+/)
                .filter((paragraph) => paragraph.trim().length !== 0).length,
        [text],
    );
    const uniqueWords = useMemo(
        () =>
            new Set(
                words
                    .map((word) =>
                        word.toLowerCase().replace(/[^a-z0-9']/gi, ""),
                    )
                    .filter((word) => word.length !== 0),
            ).size,
        [words],
    );
    const topWords = useMemo(() => {
        const frequency = {};
        words.forEach((word) => {
            const cleanWord = word.toLowerCase().replace(/[^a-z0-9']/gi, "");
            if (cleanWord.length > 0) {
                frequency[cleanWord] = (frequency[cleanWord] || 0) + 1;
            }
        });
        return Object.entries(frequency)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }, [words]);

    const buttonBase =
        "rounded-2xl px-4 py-2 text-sm font-semibold transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-50";
    const accentBtn = `${buttonBase} bg-[var(--accent)] text-white shadow-lg shadow-[rgba(79,118,255,0.18)] hover:brightness-110`;

    return (
        <>
            <div
                id={props.id}
                className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] transition-colors duration-300 dark:border-slate-700/90 dark:bg-slate-900/85"
            >
                <div className="space-y-4">
                    <div>
                        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                            {props.heading}
                        </h1>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                            Paste your text and choose from smart editing tools
                            with one tap.
                        </p>
                    </div>

                    <textarea
                        id="myTextBox"
                        rows="9"
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Type or paste your text here..."
                        className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base leading-7 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/15 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-500"
                    />

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleUpClick}
                        >
                            UPPERCASE
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleLoClick}
                        >
                            lowercase
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleCapitalize}
                        >
                            Capitalize Words
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleSentenceCase}
                        >
                            Sentence case
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleToggleCase}
                        >
                            Toggle Case
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleRemovePunctuation}
                        >
                            Remove Punctuation
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleExtraSpaces}
                        >
                            Remove Spaces
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleSort}
                        >
                            Sort Words
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleCopy}
                        >
                            Copy Text
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={accentBtn}
                            onClick={handleDownload}
                        >
                            Download Text
                        </button>
                        <button
                            disabled={text.length === 0}
                            className={`${buttonBase} rounded-2xl border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800`}
                            onClick={handleClearClick}
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[repeat(2,minmax(0,1fr))]">
                <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] transition-colors duration-300 dark:border-slate-700/90 dark:bg-slate-900/85">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                        Analysis Report
                    </h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {[
                            ["Words", words.length],
                            ["Characters", text.length],
                            ["Characters (no spaces)", charactersWithoutSpaces],
                            ["Sentences", sentenceCount],
                            ["Paragraphs", paragraphCount],
                            ["Unique words", uniqueWords],
                            ["Reading min", (words.length * 0.008).toFixed(2)],
                            [
                                "Top word",
                                topWords.length > 0 ? topWords[0][0] : "—",
                            ],
                        ].map(([label, value]) => (
                            <div
                                key={label}
                                className="rounded-3xl border border-slate-200/70 bg-slate-50 p-4 text-center dark:border-slate-700 dark:bg-slate-950/80"
                            >
                                <p className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
                                    {value}
                                </p>
                                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                                    {label}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="rounded-[1.75rem] border border-slate-200/80 bg-white/95 p-6 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] transition-colors duration-300 dark:border-slate-700/90 dark:bg-slate-900/85">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            Top words
                        </h3>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            Live insights
                        </span>
                    </div>
                    <div className="mt-4 min-h-[120px] space-y-3">
                        {topWords.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {topWords.map(([word, count]) => (
                                    <span
                                        key={word}
                                        className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                    >
                                        {word} × {count}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Add text to see top words and frequency details.
                            </p>
                        )}
                    </div>

                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                            Preview
                        </h3>
                        <div className="mt-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-5 text-sm leading-7 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                            {text.length > 0
                                ? text
                                : "Nothing to preview — start typing to see instant results."}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
});

export default TextForm;
