export const validateFieldRequired = (value: string): boolean | string => {
  if (!value || value.trim() === '') {
    return 'This field is required';
  }
  return true;
};

export const textFieldValidate = {
  validate: validateFieldRequired,
};
