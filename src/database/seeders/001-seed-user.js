module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('Users', [
      {
        id: 11111,
        email: 'admin@email.com',
        password: 'admin',
        firstName: 'admin',
        lastName: 'admin',
        role: 'admin',
        createdAt: '2019-06-08 009:10:38.181+01',
        updatedAt: '2019-06-08 009:10:38.181+01',
      },
      {
        id: 22222,
        email: 'client@email.com',
        password: 'client',
        firstName: 'John',
        lastName: 'doe',
        role: 'clinet',
        createdAt: '2019-06-08 009:10:38.181+01',
        updatedAt: '2019-06-08 009:10:38.181+01',
      },
    ]),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {}),
};
