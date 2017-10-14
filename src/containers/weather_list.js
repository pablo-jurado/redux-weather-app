import React from 'react'
import { connect } from 'react-redux'

const WeatherList = (props) => {
  const cities = props.weather.map((data, index) => {
    return (
      <tr key={index}>
        <td>{data.city.name}</td>
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
