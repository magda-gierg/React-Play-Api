import request from 'superagent'

export function getLocation(address, cb) {
  const formatAddress = (address) => {
    return address.split('').map(char => (char) == ' ' ? '+' : char).join('')
  }
  // ?address=${address}
  address = formatAddress(address)
  request
    .get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
    .query({key: "AIzaSyCZB9qVbjuAt5vwLhjOtFO0_O0WhENpzeg"})
    .set('Accept', 'application/json')
    // .send({address})
    .end((err, res) => {
      // console.log(res.body);
      console.log(res.body);
      let arr = res.body.results[0].address_components
      console.log({arr});
      cb(arr[arr.length - 1].long_name)
    })
}
