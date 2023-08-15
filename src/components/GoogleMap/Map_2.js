import { Loader } from '@googlemaps/js-api-loader';
const { GMAPS_KEY } = require('../../../gMapsKey.js');
const mapIcon = require("../../assets/ArborCraft_circle.png");

export default function Map_2() {
  const mapCoord = { lat: 39.696544, lng: -105.112277 };
  const icon = document.createElement('img');
    icon.src = mapIcon;
    icon.style.height = "5em";
    icon.style.width = "5em";

  const loader = new Loader({
    apiKey: GMAPS_KEY,
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const mapAreaCoordinates = [
      { lat: 39.865711, lng: -105.240100 },
      { lat: 39.850476, lng: -105.165414 },
      { lat: 39.835761, lng: -105.025950 },
      { lat: 39.780123, lng: -105.001790 },
      { lat: 39.769302, lng: -104.998375 },
      { lat: 39.740344, lng: -105.025253 },
      { lat: 39.653137, lng: -104.959470 },
      { lat: 39.566194, lng: -104.960602 },
      { lat: 39.561301, lng: -105.109988 },
      { lat: 39.568955, lng: -105.164982 },
      { lat: 39.624159, lng: -105.192569 },
      { lat: 39.615984, lng: -105.232234 },
      { lat: 39.654674, lng: -105.300089 },
      { lat: 39.711010, lng: -105.294473 },
      { lat: 39.865711, lng: -105.240100 },
    ];

    const serviceArea = new google.maps.Polyline({
      path: mapAreaCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    const map = new Map(document.getElementById("map"), {
      zoom: 9.5,
      center: mapCoord,
      mapId: "GOLDEN_CO_MAP",
    });

    serviceArea.setMap(map);

    const marker = new AdvancedMarkerElement({
      map: map,
      position: mapCoord,
      title: "Golden, CO",
      content: icon,
    });
  });
};
