const rows = document.querySelectorAll(".score-table tbody tr");
const totalElement = document.querySelector("[data-total]");
const eventsElement = document.querySelector("[data-events]");

if (totalElement && eventsElement) {
    let total = 0;
    let scoredEvents = 0;

    rows.forEach((row) => {
        const scoreCell = row.querySelector(".score");
        const scoreText = scoreCell?.textContent.trim();

        if (!scoreText) {
            return;
        }

        const score = Number(scoreText);
        if (!Number.isFinite(score)) {
            return;
        }

        total += score;
        scoredEvents += 1;
        row.classList.toggle("has-points", score > 0);
    });

    totalElement.textContent = total.toLocaleString();
    eventsElement.textContent = String(scoredEvents);
}
