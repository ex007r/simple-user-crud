'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        firstName: "Vinícius",
        lastName: "Carvalho",
        age: 28,
        country: "Brazil",
        city: "São Paulo",
        instagram: "Instagram 1",
        facebook: "facebook 1",
        twitter: "Twitter 1",
        linkedin: "Linkedin 1",
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "Thiago",
        lastName: "Ventura",
        age: 38,
        country: "Brazil",
        city: "São Paulo",
        instagram: "Instagram 2",
        facebook: "facebook 2",
        twitter: "Twitter 2",
        linkedin: "Linkedin 2",
        active: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
