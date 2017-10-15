import React, { Component } from 'react'

class GoogleMap extends Component {
  componentDidMount () {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
    console.log(this.refs.map)
  }

  render () {
    return <div ref='map' className='google-map' />
  }
}

export default GoogleMap
