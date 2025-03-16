async function askAI() {
    const userInput = document.getElementById("user-input").value;
    const responseDiv = document.getElementById("ai-response");

    if (userInput.trim() === "") {
        responseDiv.innerHTML = "<p style='color: red;'>Te rog să introduci o întrebare!</p>";
        return;
    }

    const apiUrl = `https://api.brainshop.ai/get?bid=175078&key=WFzA2Pb77NjVH2sC&uid=12345&msg=${encodeURIComponent(userInput)}`;

    try {
        responseDiv.innerHTML = "<p>Se generează răspunsul...</p>";

        const response = await fetch(apiUrl);
        const data = await response.json();

        responseDiv.innerHTML = `<p><strong>AI:</strong> ${data.cnt}</p>`;
    } catch (error) {
        responseDiv.innerHTML = `<p style='color: red;'>Eroare: ${error.message}</p>`;
    }
}
