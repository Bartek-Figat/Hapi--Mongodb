class User {
  constructor(isActive = false, age = "", eyeColor = "", company = "") {
    this.isActive = isActive;
    this.age = age;
    this.eyeColor = eyeColor;
    this.company = company;
  }
}

module.exports = {
  User,
};
