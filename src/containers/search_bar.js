import React, { Component } from 'react'


class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { text: '' }

    this.onInputChange = this.onInputChange.bind(this)

  }

  onInputChange (event) {
    this.setState( {text: event.target.value} )
  }

  onFormSubmit (event) {
    event.preventDefault()
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


export default SearchBar
