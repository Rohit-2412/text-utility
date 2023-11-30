import "./App.css";

import React, { useState } from "react";

import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
    const [mode, setMode] = useState("light");

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });

        setTimeout(() => {
            setAlert(null);
        }, 2000);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "black";
            showAlert("Dark mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("Light mode has been enabled", "success");
        }
    };
    return (
        <div>
            <Navbar
                title="Text Utility"
                aboutText="About TextUtility"
                mode={mode}
                toggleMode={toggleMode}
            />

            <Alert alert={alert} />

            <TextForm
                showAlert={showAlert}
                heading="Enter text to analyze"
                mode={mode}
            />
        </div>
    );
}

export default App;
