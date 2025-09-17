export type Jadwal = {
  tanggal: string;
  subuh: string;
  dzuhur: string;
  ashar: string;
  maghrib: string;
  isya: string;
};

export type SholatData = {
  lokasi: string;
  jadwal: Jadwal;
};

export type HijriahDate = [string, string, string];
