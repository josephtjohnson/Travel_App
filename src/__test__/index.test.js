const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\Travel-project\\Travel-App\\src\\.env'
});

const geonamesApi = process.env.API_GEO;
const geonames = process.env.GEONAMES;

const fetch = require('node-fetch');
const axios = require('axios');
describe('Verify API call', () => {
    it('Verify GET route', async () => {
        const geoUrl = geonames + 'Chicago' + '&maxRows=1'  + '&type=json' + '&username=' +  geonamesApi;
        await axios(geoUrl)
        .then(r => {
        expect(r.data).toBeDefined();
        });
    });
});
