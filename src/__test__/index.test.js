
import{ getCoordinates } from '../src/server/js/index';

const fetch = require('node-fetch'); 
const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\Travel-project\\Travel-App\\src\\.env'
});

const apiKey = process.env.API_GEO;
const geonames = process.env.GEONAMES;

describe('Verify API call', () => {
  it('should fetch coordinates for location', async () => {
    const city = 'New York';
    const geoUrl = geonames + city + '&maxRows=1'  + '&type=json' + '&username=' +  apiKey;
    const data = await fetch(geoUrl)
      .expect((response) => {
        assert.ok(response.text.includes(200));
      })
})});
