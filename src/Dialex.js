import axios from 'axios';

class Dialex {
  key: string;
  url: string;

  constructor(key: string) {
    this.key = key;
    this.url = 'https://dialexherok.herokuapp.com';
  }

  transform(transformContent: string, lang: string): Promise<any> {
    const self = this;

    return new Promise((resolve, reject) => {
      axios.get(`${self.url}/api/v1/process`, {
        params: {
          apikey: self.key,
          data: transformContent,
          lang: lang
        }})
        .then(response => resolve(response.data.output.result))
        .catch(err => reject(err.message || err));
    });
  }
}

export default Dialex;
