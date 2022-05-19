export default {
  fetch: (options) => {
    return new Promise(function (resolve, reject) {
      fetch(options.url, {
        method: options.method || 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: options.data || {} // JSON.stringify(data)
      }).then(function (response) {
          return response.json()
        }).then(function (json) {
          resolve(json)
        }).catch(function (err) {
          reject(err)
        });
    })
  }
}
