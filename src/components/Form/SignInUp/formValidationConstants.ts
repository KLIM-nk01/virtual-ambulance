export const Required = {
  required: {
    value: true,
    message: 'Required to fill.'
  }
};

export const Email = {
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

export const Password = {
  required: 'You must specify a password',
  minLength: {
    value: 8,
    message: 'Password must have at least 8 characters'
  }
};

export const PhoneNumber = {
  required: {
    value: true,
    message: 'Required to fill.'
  },
  pattern: {
    value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
    message:
      'The Phone number is not valid. Please use valid format ( +375(29)397-51-** )'
  }
};

export const Birthday = {
  required: {
    value: true,
    message: 'Required to fill.'
  },
  pattern: {
    value:
      /(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[01][0-9]|2020)\b/,
    message: 'The birthday is not valid. Please use valid format ( DD/MM/YYYY )'
  }
};

export const Address = {
  required: {
    value: true,
    message: 'Required to fill.'
  }
};

export const Experience = {
  required: {
    value: true,
    message: 'Please indicate the number of years. (Round up).'
  }
};

export const validationRules = {
  required: 'Required to fill.',
  email: {
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message:
        'The email address is not valid. Please use valid format ( ...@mail.ru, ...@gmail.com etc.)'
    }
  },
  phone: {
    pattern: {
      value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
      message:
        'The Phone number is not valid. Please use valid format ( +375(29)397-51-** )'
    }
  },
  password: {
    minLength: {
      value: 0,
      message: 'Password must have at least 8 characters'
    }
  },
  birthday: {
    pattern: {
      value:
        /(?:0[1-9]|[12][0-9]|3[01])[-/.](?:0[1-9]|1[012])[-/.](?:19\d{2}|20[01][0-9]|2020)\b/,
      message:
        'The birthday is not valid. Please use valid format ( DD/MM/YYYY )'
    }
  },
  experience: {
    required: {
      value: true,
      message: 'Please indicate the number of years. (Round up: 21 years).'
    }
  }
};
