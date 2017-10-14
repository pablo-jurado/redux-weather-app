import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions'


class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { text: '' }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange (event) {
    this.setState( {text: event.target.value} )
  }

  onFormSubmit (event) {
    event.preventDefault()

    this.props.fetchWeather(this.state.text)
    this.setState({text: ''})
  }

  render () {
    return (
      <form className='input-group' onSubmit={this.onFormSubmit} >
        <input
          value={this.state.text}
          className='form-control'
          placeholder='search city'
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }

}

function mapDispatchToProps (dispatch) {
  return bindActionCreators( { fetchWeather }, dispatch )
}

// first arguments is null because is expecting mapStateToProps
export default connect(null, mapDispatchToProps)(SearchBar)
