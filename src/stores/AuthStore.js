import { observable, action } from 'mobx';

class AuthStore {
  @observable email = "";
  @observable password = "";
  @observable token = "";

  @action setEmail(email) {
    this.email = email;
  }

  @action setPassword(password) {
    this.password = password;
  }

  @action logout() {
    this.email = "";
  }

  setCookie = (token) => {
    this.token = token;
    window.localStorage.setItem('jwt', token);
  }

  getCookie = () => {
    return window.localStorage.getItem('jwt');
  }

  logoutUser = () => {
    window.localStorage.clear("jwt");
    return window.location = "/";
  }
}

export default new AuthStore();