import React, { useState, useEffect } from "react";

function Cursor() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        setX(e.clientX);
        setY(e.clientY);

        e.target.setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px;");

    };

    useEffect(() => {

        document.addEventListener("mousemove", logMousePosition);
    }, []);

    return <span></span>;
}

export default Cursor;