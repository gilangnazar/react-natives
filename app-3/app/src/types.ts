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

export interface AyatItem {
  arab: string;
  asbab: string;
  audio: string;
  ayah: string;
  hizb: string;
  id: string;
  juz: string;
  latin: string;
  notes: string | null;
  page: string;
  surah: string;
  text: string;
  theme: string;
}
