const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite3'
})


const Premiya = sequelize.define('Premiya', {
    // PREMIYA_: {
    //     type: DataTypes.DECIMAL(15, 2),
    //     allowNull: false
    // },
    // OBJECT_ID: {
    //     type: DataTypes.date,
    //     allowNull: false
    // },
    // TYPE: {
    //     type: DataTypes.SMALLINT,
    //     allowNull: false
    // },
    // PAYDOC: {
    //     type: DataTypes.STRING,
    //     allowNull: true
    // }
});

// Payment.belongsTo(Contract, {foreignKey: 'CONTRACT_ID'});
// Payment.sync({force: true});


module.exports = Premiya;
