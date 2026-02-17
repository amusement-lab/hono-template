export default class UserClass {
  static async getUser() {
    return [
      { username: "myname", password: "123456" },
      { username: "yourname", password: "654321" },
      { username: "hisname", password: "abcdef" }
    ]
  }
}