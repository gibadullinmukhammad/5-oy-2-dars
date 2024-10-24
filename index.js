const minutesInput = document.getElementById("minutes-input");
const timeDisplay = document.getElementById("time-display");
const startBtn = document.getElementById("start-btn");
const resetBtn = document.getElementById("reset-btn");

let countdown;
let totalSeconds;

function updateDisplay(minutes, seconds) {
    timeDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (countdown) clearInterval(countdown);

    const minutes = parseInt(minutesInput.value);
    if (isNaN(minutes) || minutes < 0) {
        alert("Please enter a valid number of minutes.");
        return;
    }

    totalSeconds = minutes * 60;

    countdown = setInterval(() => {
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;

        updateDisplay(mins, secs);

        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(countdown);
            alert("Time's up!");
        }
    }, 1000);
});

resetBtn.addEventListener("click", () => {
    clearInterval(countdown);
    timeDisplay.innerText = "00:00";
    minutesInput.value = "";
});
