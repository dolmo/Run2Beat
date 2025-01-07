const axios = require('axios');

const clientId = '143170';
const clientSecret = '346f8d82bd4041970dabcef9c34f2779b0a5b1ac';
const authorizationCode = 'd2142e7e0c2b11cfb8b1b6465348187f9bb3c56d';

async function exchangeToken() {
  try {
    const response = await axios.post('https://www.strava.com/oauth/token', {
      client_id: clientId,
      client_secret: clientSecret,
      code: authorizationCode,
      grant_type: 'authorization_code',
    });

    console.log('Access Token:', response.data.access_token);
    console.log('Refresh Token:', response.data.refresh_token);
    console.log('Expires At:', new Date(response.data.expires_at * 1000).toLocaleString());
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

exchangeToken();
