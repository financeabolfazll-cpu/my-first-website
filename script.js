document.getElementById("btn").addEventListener("click", function () {
});

const startDate = new Date(2026, 3, 19);

function updateTimer() {
    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60)) / 1000
    );

document.getElementById("days").innerHTML =
    `❤️ ${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه قلبم شدییییی❤️`;
}

updateTimer();
setInterval(updateTimer, 1000);

document.getElementById("btn").addEventListener("click", function () {

    for (let i = 0; i < 40; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "heart";

        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.animationDuration =
            (Math.random() * 3 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    btn.innerHTML = "❤️";

    let count = 0;

    const interval = setInterval(() => {
        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);

        count++;

        if (count >= 15) {
            clearInterval(interval);
        }
    }, 150);
});