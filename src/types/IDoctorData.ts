export interface IDoctorsData {
  id_doctor: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
  workPlace: string;
  direction: string;
  expiriens: string;
  photo: string;
  description: string;
  patient: string[];
  workTime: {
    date: string;
    time: string;
  }[];
}
