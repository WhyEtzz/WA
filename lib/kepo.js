const { fetchJson, fetchBase64 } = require('../lib/fetcher')


const stalk = (username) => new Promise((resolve, reject) => {
    fetchJson(`http://docs-jojo.herokuapp.com/api/stalk?username=${username}`)
        .then((result) => {
            const res = result.result
            resolve(res)
        })
        .catch((err) => {
            console.error(err)
            reject(err)
        })
})

module.exports = {
    stalk
}