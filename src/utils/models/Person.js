const sequelize = require('sequelize');

module.exports = (db) => {
    const Person = db.define('person', {
        lastname : { type: sequelize.DataTypes.STRING },
        firstname: { type: sequelize.DataTypes.STRING },
        speciality : { type: sequelize.DataTypes.STRING },
        picture : { type: sequelize.DataTypes.STRING },
    });
    return Person;
};