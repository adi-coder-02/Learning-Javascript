function createToast(config) {
    return function (notStr) {
        const toast = document.createElement("div");
        toast.className = `inline-block ${config.theme === "dark" ? "bg-green-500 text-white" : "bg-blue-500 text-white"} px-6 py-3 rounded shadow-lg transition-opacity pointer-events-none`;

        const span = document.createElement("span");
        span.textContent = notStr || "Notification sent successfully!";

        toast.appendChild(span);
        document.querySelector(".notications").appendChild(toast);

        if(config.positionX !== "left" || config.positionY !== "top") {
            document.querySelector(".notications").className += `
                ${config.positionX === "right" ? "fixed right-5" : "fixed left-5"}
                ${config.positionY === "bottom" ? "fixed bottom-5" : "fixed top-5"}`
        }

        setTimeout(() => {
            document.querySelector(".notications").removeChild(toast);
        }, config.duration * 1000);       
    }
}

let notify = createToast({ 
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3, 
});

notify("Data saved successfully!");
// notify("Welcome back, user!");
setTimeout(() => {
    notify("Another notification!");
}, 2000);


