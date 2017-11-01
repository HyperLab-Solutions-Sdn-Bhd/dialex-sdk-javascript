import { Dialex } from '../src/index';

const apiKey = process.env.API_KEY;

let dialex;

describe('Dialex API', () => {
  beforeAll(() => {
    dialex = new Dialex(apiKey);
  });

  it('should return an instance of the SDK', () => {
    expect(dialex).toBeInstanceOf(Dialex);
  });

  it('should return a transformed output', () => {
    return dialex.transform('diff column', 'en').then(res => {
      expect(res).toBe('difference column');
    });
  });

  it('should return error if no API key passed in', () => {
    let noKeyDialex = new Dialex();

    return noKeyDialex.transform('diff column', 'en').catch(err => {
      expect(err).toMatch('Request failed with status code 401');
    });
  });
});
