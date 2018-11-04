import { observable, action, reaction } from 'mobx';

class AuthStore {
  constructor() {
    reaction(
      () => this.email,
      email => window.localStorage.setItem("email", email),
      {
        fireImmediately: true
      }
    );
    reaction(
      () => this.username,
      username => window.localStorage.setItem("username", username),
      {
        fireImmediately: true
      }
    );
  }

  @observable email = "" || window.localStorage.getItem("email");
  @observable password = "";
  @observable username = "" || window.localStorage.getItem("username");
  @observable token = "";

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action setUsername(username) {
    this.username = username;
  }

  renderRedirect = (route) => window.location = route;

  setCookie = (token) => {
    this.token = token;
    window.localStorage.setItem('jwt', token);
  }

  getCookie = () => {
    return window.localStorage.getItem('jwt');
  }

  getEmail = () => {
    return window.localStorage.getItem("email");
  }

  getUsername = () => {
    return window.localStorage.getItem("username");
  }

  logoutUser = () => {
    window.localStorage.clear("jwt");
    return window.location = "/";
  }
}

export default new AuthStore();