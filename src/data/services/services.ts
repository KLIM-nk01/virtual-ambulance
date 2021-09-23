interface IService {
  serviceDirection: string;
  serviceCategories: Array<string>;
}

export const services: Array<IService> = [
  {
    serviceDirection: 'Allergology',
    serviceCategories: [
      'Consultation with an allergist-immunologist',
      'Allergotest',
      'Treatment in allergology-immunology'
    ]
  },
  {
    serviceDirection: 'Venereology',
    serviceCategories: [
      'Consultation with a venereologist',
      'Consultation with a dermatovenerologist',
      'STI test'
    ]
  },
  {
    serviceDirection: 'Vaccination',
    serviceCategories: [
      'Vaccination against Covid-19',
      'HPV vaccine',
      'Chickenpox vaccine'
    ]
  }
];
