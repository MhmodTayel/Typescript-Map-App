export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `<h4>${mappable.markerContent()}</h4>`,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  drawLine(...coords: Mappable[]): void {
    console.log(coords.map((coord) => coord.location));
    const line = new google.maps.Polyline({
      path: coords.map((coord) => coord.location),
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
    line.setMap(this.googleMap);
  }
}
