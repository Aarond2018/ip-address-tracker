import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Map extends Component {
  render() {
    const position = [this.props.data.location.lat, this.props.data.location.lng]
    
    return (
      <div className="widthFull">
        <MapContainer center={position} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              {this.props.data.location.city}, {this.props.data.location.region}, {this.props.data.location.country}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  }
}
