const dotenv = require('dotenv');
dotenv.config();
const geonamesApi = process.env.API_GEO;
const geonames = process.env.GEONAMES;

// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
app.use(express.static('dist'))

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//GET response for homepage
app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

//designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//POST route
app.post('/coords', getCoordinates);

let locationResults = []
async function getCoordinates(req, res) {
    const city = req.body.city;
    const url = `${geonamesURL}${city}&maxRows=1&username=${geonamesApiKey}`;
    const data = await fetch(encodeURI(url))
        .then(res => res.json());

    const locationInfo = {
        lat: data.geonames[0].lat;
        lng: data.geonames[0].lng;
        country: data.geonames[0].countryName;
    }
    locationResults.push(locationInfo);
    res.send(locationResults)
}
