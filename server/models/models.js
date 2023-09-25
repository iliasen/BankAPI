const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    surname: {type: DataTypes.STRING, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    lastName: {type: DataTypes.STRING, allowNull: false},
    birthday: {type: DataTypes.DATE, allowNull: false},
    passportSeries: {type: DataTypes.STRING, allowNull: false},
    passportId: {type: DataTypes.STRING, allowNull: false, unique: true},
    whoIssuedThePassport: {type: DataTypes.STRING, allowNull: false},
    dateOfIssue: {type: DataTypes.DATE, allowNull: false},
    placeOfBirth: {type: DataTypes.STRING, allowNull:false},
    registration: {type: DataTypes.STRING, allowNull:false},
    homeTel: {type: DataTypes.STRING, unique: true},
    mobileTel: {type: DataTypes.STRING, unique: true},
    email: {type: DataTypes.STRING, unique: true},
    placeOfWork: {type: DataTypes.STRING, defaultValue: "-"},
    post: {type: DataTypes.STRING, defaultValue: "-"},
    maritalStatus: {type: DataTypes.STRING, allowNull: false},
    citizenship: {type: DataTypes.STRING, allowNull: false},
    disability: {type: DataTypes.BOOLEAN, allowNull: false},
    retiredPeople: {type: DataTypes.BOOLEAN, allowNull: false},
    income: {type: DataTypes.INTEGER, allowNull: false}
})

module.exports = {
    User,
}