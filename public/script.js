document.getElementById("connect-spotify").addEventListener("click", async () => {
    const token = prompt("Enter your Spotify Access Token:");
    const response = await fetch(`http://localhost:3000/spotify/recently-played?spotifyToken=${token}`);
    const data = await response.json();
    document.getElementById("data").innerHTML = JSON.stringify(data, null, 2);
  });
  
  document.getElementById("connect-strava").addEventListener("click", async () => {
    const token = prompt("Enter your Strava Access Token:");
    const response = await fetch(`http://localhost:3000/strava/activities?stravaToken=${token}`);
    const data = await response.json();
    document.getElementById("data").innerHTML = JSON.stringify(data, null, 2);
  });
  