import request from 'superagent'

export function getOrgs(username, cb) {
  request
    .get('https://api.github.com/users/joshuavial/orgs')
    .end((err, res) => {
      cb(res.body)
    })
}
