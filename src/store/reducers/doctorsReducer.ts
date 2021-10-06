interface IDoctorsData {
  doctorsData: any[];
}

interface IAction {
  type: string;
  payload?: any;
}

export const initialState: IDoctorsData = {
  doctorsData: [
    {
      id_doctor: 0,
      name: 'Alex',
      lastName: 'White',
      phone: '+375(29)123-45-56',
      email: 'Alex.WH@gmail.com',
      workPlace: 'id_medcenter',
      direction: 'Allergist',
      expiriens: '21 years',
      // photo: icons.f1,
      description:
        'is a specialist in correcting speech defects in children. Olga Valerievna is a specialist in correcting speech defects in children.',
      patient: ['id_user', 'id_user'],
      workTime: [
        {
          day: 'dd/mm/yyyy',
          time: 'hh.mm'
        }
      ]
    }
  ]
};

export const doctorsReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
