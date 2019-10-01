const USERS_ENDPOINT = 'http://rfyilyruil.mocklab.io';

class Service {
  async getDefaultUsers() {
    const url = `${USERS_ENDPOINT}/thing/1`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`Service getDefaultUsers failed, HTTP status ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
}

export default new Service();
