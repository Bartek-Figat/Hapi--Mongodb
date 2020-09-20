class User {
  constructor(firstName = "", lastName = "", userName = "", id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.id = id;
  }
}

module.exports = {
  User,
};
