

const express = require('express');
const axios = require('axios');
const app = express();

const clientId = '143170';
const clientSecret = '346f8d82bd4041970dabcef9c34f2779b0a5b1ac';
const redirectUri = 'http://localhost:3000/callback';

// Root route to start the process
app.get('/', (req, res) => {
  res.send('Strava integration is ready!');
});

// Callback route to handle Strava's redirect
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Authorization code not found');
  }

  try {
    // Exchange the authorization code for an access token
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: 'authorization_code',
    });

    const { access_token, refresh_token, expires_at } = response.data;

    res.send(`
      <h1>Access Token Received</h1>
      <p>Access Token: ${access_token}</p>
      <p>Refresh Token: ${refresh_token}</p>
      <p>Expires At: ${new Date(expires_at * 1000).toLocaleString()}</p>
    `);
  } catch (error) {
    console.error('Error exchanging token:', error.response ? error.response.data : error.message);
    res.status(500).send('Error exchanging token');
  }
});


// Spotify Recently Played API
app.get("/spotify/recently-played", async (req, res) => {
  const { spotifyToken } = req.query;
  try {
    const response = await axios.get("https://api.spotify.com/v1/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${spotifyToken}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch Spotify data" });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
