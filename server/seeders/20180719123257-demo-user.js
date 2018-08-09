'use strict'

var data = [
  {
    username: 'lol',
    password: '$2b$10$q.6rzVw.j43XxQqu8LtbKuLp4lPGr3z0iMv.O.5pMdpWT.ZX4OnIe',
    roles: 'admin/accountant/sales',
  },
  {
    username: 'admin',
    password: '$2b$10$I8InVorMM2HLn0AC9evt7.Zu1VqMiNjXFr1OrIQBMd4HQa87FjcXu',
    roles: 'admin/accountant',
  },
  {
    username: 'account',
    password: '$2b$10$I8InVorMM2HLn0AC9evt7.Zu1VqMiNjXFr1OrIQBMd4HQa87FjcXu',
    roles: 'accountant',
  },
  {
    username: 'sales',
    password: '$2b$10$I8InVorMM2HLn0AC9evt7.Zu1VqMiNjXFr1OrIQBMd4HQa87FjcXu',
    roles: 'sales',
  },
  {
    username: 'stock',
    password: '$2b$10$I8InVorMM2HLn0AC9evt7.Zu1VqMiNjXFr1OrIQBMd4HQa87FjcXu',
    roles: 'stock',
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  },
}
