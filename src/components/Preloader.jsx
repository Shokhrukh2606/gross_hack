import React from "react";


const spinnerStyles = {
    zIndex: 2,
    position: "absolute",
    top: "calc(50% - 1rem)",
    left: "calc(50% - 1rem)"
};
const contentStyles = {
    zIndex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
    opacity: 0.5
};

export default ({ loading, children, small = false }) => {
    if (!loading)
        return (
            <div>
                <div />
                <div>{children}</div>
            </div>
        );

    let styles = { ...spinnerStyles };

    if (small) {
        styles = {
            ...styles,
            width: "1rem",
            height: "1rem",
            top: "calc(50% - .5rem)",
            left: "calc(50% - .5rem)"
        };
    }

    return (
        <div style={{ position: "relative" }} className="d-flex align-items-center">
            <div className="spinner-border" style={styles} />
            <div style={contentStyles}>{children}</div>
        </div>
    );
};
