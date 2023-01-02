export const isNameValid = (name: string) => {
  return name.length === 0 ? "This field is required" : null;
};

export const isMessageValid = (message: string) => {
  return message.length === 0 ? "This field is required" : null;
};

export const isEmailValid = (email: string) => {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return email.match(validRegex) === null ? "Input valid email" : null;
};
