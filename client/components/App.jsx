
import React from 'react'
import {getOrgs} from '../api'

class App extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      orgs: []
    }
  }
  componentDidMount() {
    getOrgs('joshuavial', (orgs) => {
      console.log(orgs)
      this.setState(
        {orgs: orgs.map(org => org.login)}
      )
    })
  }
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1>React development has begun!</h1>
        {this.state.orgs.map((orgName, idx) => (
          <div key={idx}>{orgName}</div>
        ))}
      </div>

    )
  }
}

export default App
