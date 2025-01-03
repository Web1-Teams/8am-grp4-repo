import React, { useEffect } from "react";
import "./Canvas.css"

const Canvas = () => {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");

        if (!canvas || !context) {
            console.error("Canvas or context not found");
            return;
        }

        let radius = 10;
        let dragging = false;

        // Resize the canvas to fit the window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            context.lineWidth = radius * 2;
        };

        // Ensure canvas resizes dynamically
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const putPoint = function (e) {
            const x = e.clientX || e.touches?.[0]?.clientX;
            const y = e.clientY || e.touches?.[0]?.clientY;

            if (dragging) {
                context.lineTo(x, y);
                context.stroke();
                context.beginPath();
                context.arc(x, y, radius, 0, Math.PI * 2);
                context.fill();
                context.beginPath();
                context.moveTo(x, y);
            }
        };

        const engage = function (e) {
            dragging = true;
            putPoint(e);
        };

        const disengage = function () {
            dragging = false;
            context.beginPath();
        };

        // Mouse and Touch Event Listeners
        canvas.addEventListener("mousedown", engage);
        canvas.addEventListener("mousemove", putPoint);
        canvas.addEventListener("mouseup", disengage);

        canvas.addEventListener("touchstart", engage);
        canvas.addEventListener("touchmove", putPoint);
        canvas.addEventListener("touchend", disengage);

        // Handle radius controls
        const setRadius = (newRadius) => {
            if (newRadius < minRad) {
                newRadius = minRad;
            } else if (newRadius > maxRad) {
                newRadius = maxRad;
            }
            radius = newRadius;
            context.lineWidth = radius * 2;
            radSpan.textContent = radius;
        };

        const minRad = 0.5,
            maxRad = 100,
            defaultRad = 20,
            interval = 5,
            radSpan = document.getElementById("radval"),
            decRad = document.getElementById("decrad"),
            incRad = document.getElementById("incrad");

        if (decRad && incRad) {
            decRad.addEventListener("click", () => setRadius(radius - interval));
            incRad.addEventListener("click", () => setRadius(radius + interval));
        }

        setRadius(defaultRad);

        // Handle color changes
        const swatches = document.getElementsByClassName("swatch");
        const setColor = (color) => {
            context.fillStyle = color;
            context.strokeStyle = color;
            const active = document.querySelector(".swatch.active");
            if (active) active.classList.remove("active");
        };

        const setSwatch = (e) => {
            const swatch = e.target;
            setColor(swatch.style.backgroundColor);
            swatch.classList.add("active");
        };

        for (let swatch of swatches) {
            swatch.addEventListener("click", setSwatch);
        }

        // Handle save button
        const saveButton = document.getElementById("saveButton");
        if (saveButton) {
            saveButton.addEventListener("click", () => {
                const link = document.createElement("a");
                link.href = canvas.toDataURL("image/png");
                link.download = "drawing.png";
                link.click();
            });
        }

        // Cleanup event listeners on unmount
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            canvas.removeEventListener("mousedown", engage);
            canvas.removeEventListener("mousemove", putPoint);
            canvas.removeEventListener("mouseup", disengage);
            canvas.removeEventListener("touchstart", engage);
            canvas.removeEventListener("touchmove", putPoint);
            canvas.removeEventListener("touchend", disengage);
        };
    }, []);

    return (
        <>
            <div id="toolbar">
                <div id="rad">
                    Radius <span id="radval">10</span>
                    <div id="decrad" className="radcontrol">-</div>
                    <div id="incrad" className="radcontrol">+</div>
                </div>
                <div id="colors">
                    <div className="swatch active" style={{ backgroundColor: "rgb(207, 28, 28)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "green" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(0, 153, 255)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(143, 71, 221)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(205, 76, 207)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(255, 145, 0)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(237, 232, 91)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(13, 13, 13)" }}></div>
                    <div className="swatch" style={{ backgroundColor: "rgb(255, 255, 255)" }}></div>
                </div>
                <button id="saveButton">Save</button>
            </div>
            <canvas id="canvas" style={{ display: "block" }}>
                Sorry, your browser does not support canvas.
            </canvas>
        </>
    );
};

export default Canvas;
