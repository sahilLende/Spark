const EMAIL_REG =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REG = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

export { EMAIL_REG, PASSWORD_REG };
