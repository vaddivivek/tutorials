let [ms, s, m, h] = [0, 0, 0, 0];
let timeref = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

document.getElementById("pause-timer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
    clearInterval(int);
    [ms, s, m, h] = [0, 0, 0, 0];
    timeref.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer() {
    ms += 10;
    if (ms == 1000) {
        ms = 0;
        s++;
        if (s == 60) {
            s = 0;
            m++;
            if (m == 60) {
                m = 0;
                h++;
            }
        }
    }

    let ho = h < 10 ? "0" + h : h;
    let mo = m < 10 ? "0" + m : m;
    let so = s < 10 ? "0" + s : s;
    let mso = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;

    timeref.innerHTML = `${ho} : ${mo} : ${so} : ${mso}`;
}
