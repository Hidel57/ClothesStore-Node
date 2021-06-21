var mymap = L.map('mapid').setView([-34.6012424, -58.3861497], 13)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
  foo: 'bar',
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap)

L.marker([-34.6012424, -58.3861497]).addTo(mymap)

// var request = new XMLHttpRequest()
// request.open('GET', '/api/products', true)
// request.setRequestHeader('Content-Type', 'application/json')
// request.onload = function () {
//   if (this.status >= 200 && this.status < 400) {
//     // Success!
//     var resp = this.response
//     console.log(resp)
//     resp.products.forEach(product => {
//       L.marker(product.ubication, { title: product.productId }).addTo(mymap)
//     })
//   } else {
//     // We reached our target server, but it returned an error

//   }
// }

// request.onerror = function () {
//   // There was a connection error of some sort
// }

// request.send()
