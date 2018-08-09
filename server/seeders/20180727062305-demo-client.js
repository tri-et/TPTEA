'use strict'

var GoogleSpreadsheet = require('google-spreadsheet')
// var _d = require('lodash')
var creds = require('../etm-vn-b3e3daaaadbf.json')

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1ettyJTM0ALm9Td3Sx7UoRkVyQJZ4vA52MVNO4mOMGpw')

function getData() {
  return new Promise((resolve, reject) => {
    doc.useServiceAccountAuth(creds, function(err) {
      doc.getRows(2, function(err, rows) {
        reject(rows)
      })
    })
  })
}

module.exports = {
  async up(queryInterface, Sequelize) {
    var data = await getData().catch(err => console.log(err))
    console.log(data)
    // return queryInterface.bulkInsert(
    //   'clients',
    //   _d.map(data, row =>
    //     _d.pick(row, ['no', 'code', 'name', 'taxcode', 'address', 'deliveryaddress', 'contact', 'email', 'tel', 'fax'])
    //   ),
    //   {}
    // )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {})
  },
}
