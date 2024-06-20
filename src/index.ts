import Validation from "./validation";

const validate = (value: any, defaultMessage = '') => {
  return new Validation(value, defaultMessage);
}

export default validate;
export { validate };
