import GoogleMaps from 'google-maps';

import {GoogleAPIKey} from "./constants/constants";

/**
 * @description setting google map config parameter
 */
GoogleMaps.KEY = GoogleAPIKey;
GoogleMaps.LIBRARIES = ['geometry', 'places'];

let apiData;
const setUpMap = () =>
    new Promise((resolve, reject) => {
        if (apiData) {
            resolve(apiData);
        } else {
            GoogleMaps.load(api => {
                apiData = api;
                resolve(api);
            });
        }
    });

const GoogleMapsApi = async () => {
    const mapInstance = await setUpMap();
    return mapInstance.maps;
};

export default GoogleMapsApi;
