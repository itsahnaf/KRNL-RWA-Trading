// backend/server.js

const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const KRNL_API = "https://krnl.api.endpoint"; // Replace with the actual endpoint
const TOKEN = "YOUR_KRNL_TOKEN"; // Replace with your KRNL access token

app.post('/check-compliance', async (req, res) => {
    const { userAddress, amount } = req.body;

    try {
        const response = await axios.post(`${KRNL_API}/compliance`, {
            headers: { Authorization: `Bearer ${TOKEN}` },
            data: { userAddress, amount },
        });

        const isCompliant = response.data.isCompliant;

        res.json({ isCompliant });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to check compliance' });
    }
});

app.listen(3000, () => console.log('Backend running on http://localhost:3000'));
