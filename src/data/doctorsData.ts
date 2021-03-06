import * as icons from '@assets/doctorsImg';

export const doctorsData = [
  {
    id_doctor: 0,
    name: 'Alex',
    lastName: 'White',
    phone: '+375(29)123-45-56',
    email: 'Alex.WH@gmail.com',
    workPlace: 'id_medcenter',
    direction: 'Allergist',
    expiriens: '21 years',
    photo: icons.f1,
    description:
      'is a specialist in correcting speech defects in children. Olga Valerievna is a specialist in correcting speech defects in children.',
    patient: ['id_user', 'id_user'],
    workTime: [
      {
        date: '10.10.2021',
        time: '9.00',
      },
      {
        date: '10.10.2021',
        time: '9.15',
      },
      {
        date: '10.10.2021',
        time: '9.40',
      },
    ],
  },
  {
    id_doctor: 1,
    name: 'Henry',
    lastName: 'Riley',
    phone: '+375(29)397-51-12',
    email: 'Henry.Ri@gmail.com',
    workPlace: 'id_medcenter',
    direction: 'Cardiologist',
    expiriens: '5 years',
    photo: icons.f2,
    description:
      'The prominence of heart disease in America makes a cardiologist a very important health profession.',
    patient: ['id_user', 'id_user'],
    workTime: [],
  },
  {
    id_doctor: 2,
    name: 'Richard ',
    lastName: 'Davis',
    phone: '+375(29)397-51-23',
    email: 'Richard.D.20@gmail.com',
    workPlace: 'id_medcenter',
    direction: 'Immunologist',
    expiriens: '4 years',
    photo: icons.m1,
    description:
      'An immunologist treats health issues brought on by immune system problems. Also known as allergists, immunologists are doctors who diagnose,',
    patient: ['id_user', 'id_user'],
    workTime: [],
  },
  {
    id_doctor: 3,
    name: 'Beverly ',
    lastName: 'Bush',
    phone: '+375(29)3973434',
    email: 'Beverly20@gmail.com',
    workPlace: 'id_medcenter',
    direction: 'Mammologist',
    expiriens: '10 years',
    photo: icons.m3,
    description:
      'Mammalogy is a specialized field of biology that deals specifically with the study and observation of mammals.',
    patient: ['id_user', 'id_user'],
    workTime: [],
  },
];
