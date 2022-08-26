import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


function App() {

    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })

        setTimeout(() => {
            setAlert(null)
        }, 2000)
    }

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'black';
            showAlert("Dark mode has been enabled", "success");
        }

        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    }
    return (
        <>
            <Router>
                <Navbar title="Text Utility" aboutText="About TextUtility" mode={mode} toggleMode={toggleMode} />

                <Alert alert={alert} />
                <Routes>
                    <Route path="/about" element={<About />} />

                    <Route path="/" element={
                        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
