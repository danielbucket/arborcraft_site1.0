import { Loader } from '@googlemaps/js-api-loader';
const { GMAPS_KEY } = require('../../../gMapsKey.js');
const mapIcon = require("../../assets/ArborCraft_circle.png");

export default function Map_2() {
  const mapCoord = { lat: 39.75489003036756, lng: -105.22263764852237 };
  const icon = document.createElement('img');
    icon.src = mapIcon;
    icon.style.height = "4em";
    icon.style.width = "4em";
    icon.style.background = "fff";

  const loader = new Loader({
    apiKey: GMAPS_KEY,
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    const map = new Map(document.getElementById("map"), {
      zoom: 12,
      center: mapCoord,
      mapId: "GOLDEN_CO_MAP",
    });
    const marker = new AdvancedMarkerElement({
      map: map,
      position: mapCoord,
      title: "Golden, CO",
      content: icon,
    });
  });
};
