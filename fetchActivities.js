const axios = require('axios');

const accessToken = '3fdb236fac08a2d1f02715c90c75aedbcd8d7988';

async function fetchActivities() {
  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities/', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        per_page: 10,
        page: 1,
      },
    });

    console.log('Activities:', response.data);
  } catch (error) {
    console.error('Error fetching activity data:', error.response.data);
  }
}

fetchActivities();