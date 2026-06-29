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
`${days} روز ${hours} ساعت ${minutes} دقیقه ${seconds} ثانیه<br>
<span class="love-text">❤️ قلبم شدییییی ❤️</span>`;
}

updateTimer();
setInterval(updateTimer, 1000);

const btn = document.getElementById("btn");

let busy = false;

btn.addEventListener("click", () => {

    if (busy) return;

    busy = true;

    btn.innerHTML = "❤️";

for (let i = 0; i < 40; i++) {

        const heart = document.createElement("div");

        heart.className = "heart";
        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * window.innerWidth + "px";

        heart.style.animationDuration =
            (Math.random() * 2 + 2) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3500);
    }

    setTimeout(() => {
        busy = false;
    }, 1000);
});