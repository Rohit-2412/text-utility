import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UPPERCASE", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra Spaces", "success");
    }

    const handleCapitalize = () => {
        let arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

        }
        const str = arr.join(" ");
        setText(str);
        props.showAlert("Capitalized each word", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleSort = () => {
        text.toString();
        let arr = text.split(" ");
        arr.sort();
        setText(arr.join(" "));
        props.showAlert("Sorted", "sucess");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert(" Text cleared", "warning");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myTextBox" rows="8" placeholder="Enter your text here" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'light' ? 'white' : '#bdbdbd', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleSort}>Sort Lexicographically</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-outline-danger mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Analysis Report</h2>
                <p >Words : {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}  Characters : {text.length}</p>
                <p>{(0.008 * text.length).toPrecision(3)} minutes to read</p>
                <h3> Preview :</h3>
                <p className='text-muted'>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>

        </>
    )
}
