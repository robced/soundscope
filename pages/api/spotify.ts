const getCurrentlyPlaying = async (accessToken: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', { headers });
    console.log(response.status)
    return response.json()
}

export default getCurrentlyPlaying;

