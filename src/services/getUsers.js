import get from 'mock-get';
import response from './responce.json';

class Service {
  async getDefaultUsers() {
    const data = await get(0, response)
.then(res => {
  return res;
})
.catch(err => console.error(err));
    return data;
  }
  
}

export default new Service();
