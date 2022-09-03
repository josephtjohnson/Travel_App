const dotenv = require('dotenv');
//dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\Travel-project\\Travel-App\\src\\.env'});
dotenv.config({path : '.env'});
jest.setTimeout(30000);

const geonamesApi = process.env.API_GEO;
const geonames = process.env.GEONAMES;

const fetch = require('node-fetch');
const axios = require('axios');
describe('Verify API call', () => {
    it('Verify GET route', async () => {
        const geoUrl = geonames + 'Chicago' + '&maxRows=1'  + '&type=json' + '&username=' +  geonamesApi;
        await axios(geoUrl)
        //await axios('http://localhost:8091/display')
        .then(r => {
        expect(r.data).toBeDefined();
        //expect(r.date).toBeNull();
        });
    });
});
