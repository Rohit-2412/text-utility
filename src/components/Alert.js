import React, { useEffect, useState } from "react";

function Alert(props) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (props.alert) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 2200);
            return () => clearTimeout(timer);
        }
    }, [props.alert]);

    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
    const toneStyles = {
        success: "bg-emerald-500 text-white",
        warning: "bg-amber-400 text-slate-950",
        danger: "bg-rose-500 text-white",
    };

    return (
        <div className="alert-wrapper">
            {props.alert && (
                <div
                    className={`mx-auto flex max-w-xs items-center justify-between gap-3 rounded-full px-5 py-3 text-sm font-semibold shadow-2xl shadow-slate-900/10 transition-opacity duration-300 ${
                        visible ? "opacity-100" : "opacity-0"
                    } ${toneStyles[props.alert.type] || toneStyles.success}`}
                    role="alert"
                >
                    <span>
                        <strong>{capitalize(props.alert.type)}:</strong>{" "}
                        {props.alert.msg}
                    </span>
                </div>
            )}
        </div>
    );
}

export default React.memo(Alert);
