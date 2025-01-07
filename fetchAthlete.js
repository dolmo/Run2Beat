const axios = require('axios');

const accessToken = '3fdb236fac08a2d1f02715c90c75aedbcd8d7988';

async function fetchAthleteData() {
  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log('Athlete Data:', response.data);
  } catch (error) {
    console.error('Error fetching athlete data:', error.response.data);
  }
}

fetchAthleteData();
