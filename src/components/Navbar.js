import PropTypes from "prop-types";
import React from "react";
export default function Navbar(props) {
    return (
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        >
            <div className="container-fluid">
                <p className="navbar-brand">{props.title}</p>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"></li>
                    </ul>
                    <div
                        className={`form-check form-switch text-$(props.mode==='light' ?'dark':'light')`}
                    >
                        <input
                            className="form-check-input"
                            onClick={props.toggleMode}
                            type="checkbox"
                            role="switch"
                            id="mode"
                        />
                        <label
                            className="form-check-label modeType"
                            htmlFor="mode"
                            style={{
                                color:
                                    props.mode === "light"
                                        ? "#acdcff"
                                        : "white",
                            }}
                        >
                            Dark Mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string,
};

Navbar.defaultProps = {
    title: "Title",
    aboutText: "About",
};
