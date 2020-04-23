const sequelize = require('../database')
const Sequelize = require('sequelize')

class Booking extends Sequelize.Model { }

Booking.init({
	id: {
		type: Sequelize.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	houseId: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
	userId: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
	startDate: { type: Sequelize.DataTypes.DATEONLY, allowNull: false },
	endDate: { type: Sequelize.DataTypes.DATEONLY, allowNull: false }
}, {
	sequelize,
	modelName: 'booking',
	timestamps: true,
}
)


module.exports = Booking