import * as photo from '@assets/medCenter';

export const medCenterData = [
  {
    name: 'LODE',
    address: 'Minsk, Independence, 58A',
    photo: photo.LODE,
    description:
      'The multidisciplinary medical company "LODE" has been operating since 1992. For almost 30 years of activity, the centers have received many awards in their industry and, most importantly, popular confidence and recognition.',
    services: [
      'Oncology',
      'Immunology',
      'Cardiology',
      'Proctology',
      'Psychology',
      'Rheumatology',
      'Urology',
      'Traumatology',
      'Andrology'
    ],
    medStaff: ['id_doctor'],
    latitude: 53.900601,
    longitude: 27.558972,
    logo: photo.LODE_LOGO
  },
  {
    name: 'Alfamed',
    address: 'Minsk, Independence Avenue, 85',
    photo: photo.ALFAMED,
    description:
      'Medical Center "Alfamed-95" is a private unitary enterprise that opened its doors to patients in 2001. The medical center provides a full range of medical services for residents of the capital and guests of Minsk, delighting with impeccable service and an individual approach to each patient.',
    services: ['id_service'],
    medStaff: ['id_doctor'],
    latitude: 53.900601,
    longitude: 27.558972
  },
  {
    name: '"Doctor Profi"',
    address: 'Minsk, d. Kopische, st. Lopatin, 7a',
    photo: photo.DOCTOR_PROFI,
    description:
      'The multidisciplinary medical company "LODE" has been operating since 1992. For almost 30 years of activity, the centers have received many awards in their industry and, most importantly, popular confidence and recognition.',
    services: ['id_service'],
    medStaff: ['id_doctor'],
    latitude: 53.900601,
    longitude: 27.558972
  },
  {
    name: 'SYNLAB',
    address: 'Minsk, st. Academic, 26',
    photo: photo.SYNLAB,
    description:
      'The SINLAB medical diagnostic laboratory has been operating since 2002 and for over 16 years we have been an independent laboratory in the Republic of Belarus.',
    services: ['id_service'],
    medStaff: ['id_doctor'],
    latitude: 53.900601,
    longitude: 27.558972
  }
];
