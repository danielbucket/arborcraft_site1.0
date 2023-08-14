import { Loader } from '@googlemaps/js-api-loader';
const key = "AIzaSyBPaY6yBroGscbh8TcRu8YgYvDeHQr3GgI";


export default function Map_2() {
  let map;

  const loader = new Loader({
    apiKey: key,
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
