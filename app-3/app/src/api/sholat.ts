import axios from 'axios';

export async function fetchDataSholat() {
  try {
    const dataSholat = await axios.get(
      'https://api.myquran.com/v2/sholat/jadwal/1225/2025-09-10',
    );
    const dataHijr = await axios.get(
      'https://api.myquran.com/v2/cal/hijr/?adj=-1',
    );

    return dataSholat;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDataCalHijr() {
  try {
    const dataHijr = await axios.get('https://api.myquran.com/v2/cal/hijr');
    return dataHijr;
  } catch (error) {
    console.error(error);
  }
}
