const express = require('express');
const cors = require('cors');
const axios = require('axios');

const express = express();

express.use(cors());

const a = 'NzgzMjI5NjM0Mjg2';
const b = 'YUwB6Q';
const c = 'vPmvRmNmQab9zOsaY7pc-Q9fppE2dUyK9sG8MI';

const discordToken = `${a}.${b}.${c}`;

express.get("/", async (req, res) => {
    res.send("");
});

express.post('/discord', async (req, res) => {
    res.send("");
});

express.get('/discord', async (req, res) => {
    const userId = req.query.userId;

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required' });
    }

    try {
        const response = await axios.get(`https://discord.com/api/v10/users/${userId}`, {
            headers: {
                'Authorization': `Bot ${discordToken}`,
            },
        });

        res.set('Access-Control-Allow-Origin', '*');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Discord API', message: error.message });
    }
});

express.listen(80, () => {
    console.log("sigh");
});
