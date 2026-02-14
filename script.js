/* ===============================
   CBT Simulator - Basic Protection Layer
   © 2026 All Rights Reserved
================================= */

// Disable right click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

// Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
document.addEventListener("keydown", function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});

// DevTools detection (basic)
(function () {
    function detectDevTools() {
        const threshold = 160;
        if (
            window.outerWidth - window.innerWidth > threshold ||
            window.outerHeight - window.innerHeight > threshold
        ) {
            document.body.innerHTML = `
                <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#0f172a;color:white;font-family:sans-serif;">
                    <div>
                        <h1>Access Restricted</h1>
                        <p>Developer tools detected.</p>
                    </div>
                </div>
            `;
        }
    }

    setInterval(detectDevTools, 1000);
})();

// Console warning
console.log("%cSTOP!", "color:red;font-size:40px;font-weight:bold;");
console.log(
    "%cThis is a browser feature intended for developers. Unauthorized copying of this platform is prohibited.",
    "color:white;font-size:14px;"
);
