import React from 'react'
import {getLocation} from '../api'

export default class Form extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      postal_code: [],
      address: []
    }
  }
  componentDidMount() {
    getLocation('275 Cuba St, Wellington, New Zealand', (res) => {

    })
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <form onSubmit={this.submitAdress}>
          <input name="address" placeholder="provide your adress" type="text"/>
          <input type="submit"/>
        </form>
      </div>

    )
  }
}
