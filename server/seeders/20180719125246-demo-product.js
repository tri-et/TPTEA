'use strict'

var data = [
  {
    code: 'GAD01',
    name: 'Gạch Ấn Độ S - VISTA',
    unit: 'm2',
    listingPrice: 380000,
  },
  {
    code: 'GAD02',
    name: 'Gạch Ấn Độ FLOWER SET',
    unit: 'm2',
    listingPrice: 180000,
  },
  {
    code: 'GAD03',
    name: 'Gạch Ấn Độ S - BOLONIA',
    unit: 'm2',
    listingPrice: 390000,
  },
  {
    code: 'GG01',
    name: 'Gạch Gốm EXTIRIO 207 HL(25X75)',
    unit: 'm2',
    listingPrice: 220000,
  },
  {
    code: 'GGM01',
    name: 'Gạch Mosaic Gốm 1051(30x30)',
    unit: 'm2',
    listingPrice: 230000,
  },
  {
    code: 'GGM02',
    name: 'Gạch Mosaic Gốm DR - 44.110 30x30',
    unit: 'm2',
    listingPrice: 310000,
  },
  {
    code: 'CBT01',
    name: 'Cát bê tông rửa loại 1/loại 2',
    unit: 'm3',
    listingPrice: 240000,
  },
  {
    code: 'TVN01',
    name: 'Thép Việt Nhật Ø 18',
    unit: 'Cây (11.7m)',
    listingPrice: 262000,
  },
  {
    code: 'TC01',
    name: 'Thép cuộn Ø 8',
    unit: 'kg',
    listingPrice: 11950,
  },
  {
    code: 'XM01',
    name: 'Giá Xi măng Thăng Long',
    unit: 'Bao 50 kg',
    listingPrice: 74000,
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {})
  },
}
