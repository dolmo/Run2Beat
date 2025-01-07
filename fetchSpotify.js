const axios = require('axios');

const accessToken = 'ed3d6651111ceeb7aac8f527e17b935bd45afa21';

async function fetchSpotifyData() {
  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Spotify Data:', response.data);
  } catch (error) {
    console.error('Error fetching spotify data:', error.response.data);
  }
}

fetchSpotifyData();