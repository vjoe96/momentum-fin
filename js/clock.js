const clock = document.querySelector("#clock");
function clockRefresh() {
    clock.classList.remove("hidden");
    const date = new Date();
    let hours, minutes, seconds;
    hours = String(date.getHours()).padStart(2, "0");
    minutes = String(date.getMinutes()).padStart(2, "0");
    seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
    if (clock.clientHeight <= 106) {
        clock.classList.add("hidden");
    }
}
clockRefresh();
setInterval(clockRefresh, 1000);
