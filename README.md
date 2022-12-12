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
