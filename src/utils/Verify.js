export default class Verify {
  static isEmpty(value) {
    return value === undefined || value === null || value === '';
  }

  static isEmail(value) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
  }

  static isPassword(value) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(value);
  }

  static isMininumLength(value, length) {
    return value.length >= length;
  }
    
}