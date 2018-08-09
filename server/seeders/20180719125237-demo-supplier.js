'use strict'

var data = [
  {
    taxCode: '0315193122',
    name: 'DOANH NGHIỆP TƯ NHÂN TRULY MILK',
    address: '590 Tổ 11 ấp 5, Tỉnh Lộ 15, Xã Tân Thạnh Đông, Huyện Củ Chi, TP Hồ Chí Minh',
    phone: '094.776.5468',
  },
  {
    taxCode: '0601161562',
    name: 'CÔNG TY TNHH PHÚC TUẤN THÀNH',
    address: 'Xóm 7, Xã Hải Cường, Huyện Hải Hậu, Tỉnh Nam Định',
    phone: '0977.535.426',
  },
  {
    taxCode: '0315193122',
    name: 'CÔNG TY TNHH MỘT THÀNH VIÊN THIẾT BỊ HƯNG THỊNH',
    address: 'Thửa đất số 167, tờ bản đồ số 33, khu phố Long Bình, Phường Khánh Bình, Thị xã Tân Uyên, Tỉnh Bình Dương',
    phone: '094.776.xxxx',
  },
  {
    taxCode: '0315182723',
    name: 'CÔNG TY TNHH ĐẦU TƯ KAFFAS',
    address: 'Số 89/1/12 đường Làng Tăng Phú, Phường Tăng Nhơn Phú A, Quận 9, Thành phố Hồ Chí Minh',
    phone: '094.xxx.5468',
  },
  {
    taxCode: '3702688569',
    name: 'CÔNG TY TNHH VẬT LIỆU XÂY DỰNG - THIẾT BỊ VỆ SINH VIỆT PHÁT',
    address: 'Số 85/5, đường Nguyễn Công Hoan, Khu phố Đông B, Phường Đông Hòa, Thị xã Dĩ An, Tỉnh Bình Dương',
    phone: 'xxx.776.5468',
  },
  {
    taxCode: '0401915389',
    name: 'CÔNG TY TNHH MTV TMDV XÂY DỰNG H&T',
    address: 'Tổ 2, Thôn Bắc An, Xã Hoà Tiến, Huyện Hoà Vang, Thành phố Đà Nẵng',
    phone: '090.562.3331',
  },
  {
    taxCode: '3702688590',
    name: 'CÔNG TY TNHH ĐẦU TƯ PHÁT TRIỂN CẢNH QUAN ĐÔ THỊ BÌNH DƯƠNG',
    address: '3/179A Khu phố Bình Thuận 1, Phường Thuận Giao, Thị xã Thuận An, Tỉnh Bình Dương',
    phone: '094.776.5468',
  },
  {
    taxCode: '3702688167',
    name: 'CÔNG TY TNHH HERO ROXANA',
    address: 'Số 1/90B, Khu phố Bình Thuận 2, Phường Thuận Giao, Thị xã Thuận An, Tỉnh Bình Dương',
    phone: '094.zzz.5468',
  },
  {
    taxCode: '1801609878',
    name: 'CÔNG TY CỔ PHẦN TƯ VẤN ĐẦU TƯ XÂY DỰNG NAM KIẾN HƯNG',
    address: 'Lô D31, đường số 5, Khu TĐC Thạnh Mỹ, Phường Lê Bình, Quận Cái Răng, Thành phố Cần Thơ',
    phone: '094.776.zzz',
  },
  {
    taxCode: '3702688304',
    name: 'CÔNG TY TNHH MAY KIM XUYẾN VIỆT NAM',
    address: 'số 106K/2, khu phố 1B, Phường An Phú, Thị xã Thuận An, Tỉnh Bình Dương',
    phone: 'zzz.776.5468',
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('suppliers', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('suppliers', null, {})
  },
}
