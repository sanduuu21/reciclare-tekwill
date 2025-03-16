let score = 0;
const scoreDisplay = document.getElementById("score");
const bins = document.querySelectorAll(".bin");
const trashItems = document.querySelectorAll(".trash");

trashItems.forEach(item => {
    item.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", event.target.dataset.type);
        event.dataTransfer.setData("id", event.target.innerText);
    });
});

bins.forEach(bin => {
    bin.addEventListener("dragover", function (event) {
        event.preventDefault();
    });

    bin.addEventListener("drop", function (event) {
        event.preventDefault();
        const trashType = event.dataTransfer.getData("text");
        const trashId = event.dataTransfer.getData("id");
        const draggedItem = document.querySelector(`.trash[data-type='${trashType}']`);

        if (trashType === bin.dataset.type) {
            score += 1;
            scoreDisplay.innerText = score;
            draggedItem.remove();

            if (score === 20) {
                alert("Felicitări! Acum te provoc să sortezi și tu așa, schimbarea începe de la tine!");
            }
        } else {
            alert("Greșit! Încearcă din nou.");
        }
    });
});
