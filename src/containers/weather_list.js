import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

const WeatherList = (props) => {
  const cities = props.weather.map((data, index) => {
    const temps = data.list.map(weather => weather.main.temp)
    const press = data.list.map(weather => weather.main.pressure)
    const hum = data.list.map(weather => weather.main.humidity)

    // const lon = data.city.coord.lon
    // const lat = data.city.coord.lat
    //// es6 aproach to create lat and long const
    const { lon, lat } = data.city.coord

    return (
      <tr key={data.city.name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='K' /></td>
        <td><Chart data={press} color='green' units='hPa' /></td>
        <td><Chart data={hum} color='blue' units='%' /></td>
      </tr>
    )
  })

  return (
    <table className='table table-hover' >
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {cities}
      </tbody>
    </table>
  )
}

// eas6 aproach
function mapStateToProps ({ weather }) {
  return { weather }
}
//// this is the same
// function mapStateToProps (state) {
//   return { weather: state.weather }
// }

export default connect(mapStateToProps)(WeatherList)
