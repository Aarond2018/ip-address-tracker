import React, { Component } from 'react'

class MapDetails extends Component {
  render() {
    console.log(Object.entries(this.props.data).length === 0)

   /*  const rend = Object.entries(this.props.data).length === 0?"yeaa":"nooo" */
    
    return (
      <section className="mapDetails">
          <div>
            <p className="details-header">IP Address</p>
            <p className="details-body">{this.props.data.ip}</p>
          </div>
          <hr />
          <div>
            <p className="details-header">location</p>
            <p className="details-body">{this.props.data.location.city}, {this.props.data.location.country}</p>
          </div>
          <hr />
          <div>
            <p className="details-header">timezone</p>
            <p className="details-body">{this.props.data.location.timezone}</p>
          </div>
          <hr />
          <div>
            <p className="details-header">ISP</p>
            <p className="details-body">{this.props.data.isp}</p> 
          </div>
      </section>
    )
  }
}

export default MapDetails;
