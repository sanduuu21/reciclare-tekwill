const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/ask-simsimi", async (req, res) => {
    try {
        const userMessage = req.query.text;
        const apiUrl = `https://api.simsimi.net/v2/?text=${encodeURIComponent(userMessage)}&lc=ro`;

        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Eroare la contactarea API-ului SimSimi." });
    }
});

app.listen(3000, () => console.log("✅ Serverul rulează pe http://localhost:3000"));
