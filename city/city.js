const axios = require('axios');

const getLatLon = async city => {

    const cityEncoded = encodeURI(city);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${cityEncoded}`,
        headers: {'x-rapidapi-key': '0841b2296fmsh1edcb6f830c3597p1786e2jsnbb549dfba449'}
    });
    
    const responseApi = await instance.get();

    const data = responseApi.data.Results[0]; //I work just with the first result of the API

    const response = {
        city: data.name,
        lat: data.lat,
        lon: data.lon
    }
    
    return response;

}

module.exports = {
    getLatLon
}
