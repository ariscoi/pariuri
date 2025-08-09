import axios from 'axios';

const API_KEY = '6a711f27b398a0ce637e3c7177c8bc1e'; 
const BASE_URL = 'https://v3.football.api-sports.io';

export const getTeamLogo = async (teamName) => {
  try {
    const response = await axios.get(`${BASE_URL}/teams`, {
      params: { search: teamName },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'v3.football.api-sports.io'
      }
    });

    const logo = response.data.response[0]?.team?.logo;
    return logo;
  } catch (error) {
    console.error('Eroare la obținerea logo-ului:', error);
    return null;
  }
};
