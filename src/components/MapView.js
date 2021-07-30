import React, { Component } from 'react';
import MapDetails from './MapDetails';
import Map from "./Map";
import im from "../images/loading.gif"

class MapView extends Component {
  render() {
    
    return (
      <section id="mapView">
        {/* <Map data={this.props.data}/> */}
        
        {
          Object.entries(this.props.data).length === 0?<img src={im} className="loading-gif" alt="loading.."></img>:<Map data={this.props.data}/>
        }
        {Object.entries(this.props.data).length === 0
          ?(
            <div className="loading">
              <h3>Loading...</h3>
            </div>
          )
          : <MapDetails data={this.props.data}/>
        }
        
      </section>
    )
  }
}

export default MapView