import React from 'react'
import {getLocation} from '../api'

export default class Form extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      // address: [],
      postal_code: null,
      address: "275 Cuba St, Wellington, New Zealand",
      savedAddress: null
    }
    this.submitAddress = this.submitAddress.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
  }

  componentDidMount() {
    this.submitAddress()
  }

  updateAddress(e) {
    this.setState({[e.target.name]:e.target.value})
  }

  submitAddress(e) {
    if(e) e.preventDefault()
    if(e) e.target.reset()
    let address = this.state.address
    this.setState({savedAddress: this.state.address, address: null, postal_code: null})
    // let addr = "275 Cuba St, Wellington, New Zealand"
    getLocation(address, (postal_code) => {
      // console.log(address);
      this.setState(
        {postal_code}
      )
    })
  }

  render() {
    // console.log(this.state)
    let {postal_code, address, savedAddress} = this.state
    // let postal_code = this.state.postal_code
    return (
      <div>
        <form onSubmit={this.submitAddress.bind(this)}>
          <input name="address" placeholder="provide your adress" type="text"
            onChange={(e) => this.updateAddress(e)} />
          <input type="submit"/>
          <button type="reset">Reset</button>
        </form>
        <p>The postal code for {savedAddress} is: {postal_code} {/* this.state.address.results} */}</p>
      </div>

    )
  }
}
