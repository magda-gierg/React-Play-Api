import React from 'react'
import {getLocation} from '../api'

export default class Form extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      // address: [],
      // postal_code: [],
      address: {results: []}
    }
    this.submitAddress = this.submitAddress.bind(this)
    this.updateFormDetails = this.updateFormDetails.bind(this)
  }

  componentDidMount() {
    let addr = "275 Cuba St, Wellington, New Zealand"
    getLocation(addr, (address) => {
      console.log(address);
      this.setState(
        {address}
      )
    })
  }

  getLocation(addr, cb) {
    }

  updateFormDetails(e) {
    let newForm = this.state.newForm
    newForm[e.target.name] = e.target.value
    this.setState({newForm:newForm})
  }

  submitAddress(e) {
    e.preventDefault()
  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <form onSubmit={this.submitAdress}>
          <input name="address" placeholder="provide your adress" type="text"
            onChange={(e) => this.updateFormDetails(e)} />
          <input type="submit"/>
        </form>
        <p>The postal code for this adress is: </p>
      </div>

    )
  }
}
