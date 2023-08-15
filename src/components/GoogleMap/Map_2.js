import { Loader } from '@googlemaps/js-api-loader';
const { GMAPS_KEY } = require('../../../gMapsKey.js');

export default function Map_2() {
  let map;

  const loader = new Loader({
    apiKey: GMAPS_KEY,
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });
};
