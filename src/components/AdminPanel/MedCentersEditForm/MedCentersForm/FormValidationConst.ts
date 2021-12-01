export const Required = {
    required: {
      value: true,
      message: 'Required to fill.'
    }
  };
  
  export const Name = {
    required: {
      value: true,
      message: 'Required to fill.'
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:
        'The email address is not valid. Please use valid format ( ...@mail.ru, ...@gmail.com etc.)'
    }
  };