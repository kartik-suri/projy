// server/index.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/speak", async (req, res) => {
  const { text } = req.body;

  try {
    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/YOUR_VOICE_ID`,
      {
        text,
        model_id: "eleven_monolingual_v1",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      },
      {
        responseType: "arraybuffer",
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
          "Content-Type": "application/json",
          Accept: "audio/mpeg"
        }
      }
    );

    res.set("Content-Type", "audio/mpeg");
    res.send(response.data);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).send("Error generating voice");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
