import React from 'react'

function MyMap() {
  // Coordenadas do ponto central
  const center = { lat: 51.5074, lng: 0.1278 }

  // Raio em metros
  const radius = 500

  // Inicializa o mapa quando a página for carregada
  React.useEffect(() => {
    // Cria o mapa
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: center,
    })

    // Desenha o raio no mapa
    new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: center,
      radius: radius,
    })
  }, [])

  return <div id="map" style={{ width: '500px', height: '500px' }} />
}

export default MyMap
//-------------------------------------------------------------------------------------------

// Tom Tom Map API
npm install @tomtom-international/web-sdk-maps @turf/turf
npm install axios

// TomTom SDK
import * as tt from "@tomtom-international/web-sdk-maps";
// styles
import "@tomtom-international/web-sdk-maps/dist/maps.css";

// APP
function App() {
  const [map, setMap] = useState();
  const mapContainer = useRef();
  const AMSTERDAM = { lon: 4.896029, lat: 52.371807 };


  useEffect(() => {
    let map = tt.map({
      key: <Your_API_Key>,
      container: mapContainer.current.id,
      center: AMSTERDAM,
      zoom: 10,
      language: "pt-BR",
    });
    map.addControl(new tt.FullscreenControl());
    map.addControl(new tt.NavigationControl());


    setMap(map);
    return () => {
      map.remove();
    };
    //eslint-disable-next-line
  }, []);


  return (
    <div className="container">
      <nav className="nav">
        <h1> Geofencing in React</h1>
      </nav>
      <div ref={mapContainer} className="map" id="map" />
    </div>
  );
}
export default App;