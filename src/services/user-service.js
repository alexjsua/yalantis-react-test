export default class SwapiService {
  _apiBase = 'https://yalantis-react-school.herokuapp.com/api';
  sortMonth = [];

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllUsers = async () => {
    const res = await this.getResource(`/task0/users`);
    return res.map(this.transformUser);
  };

  extractMonth(user) {
    return new Date(user.dob).getMonth();
  }

  transformUser = (user) => {
    return {
      id: user.id,
      firstname: user.firstName,
      lastname: user.lastName,
      month: this.extractMonth(user)
    }
  };
}