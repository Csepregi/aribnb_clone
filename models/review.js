const sequelize = require('../database')
const Sequelize = require('sequelize')

class Review extends Sequelize.Model { }

Review.init({
	id: {
		type: Sequelize.DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	houseId: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
	userId: { type: Sequelize.DataTypes.INTEGER, allowNull: false },
	comment: { type: Sequelize.DataTypes.TEXT, allowNull: false }
}, {
	sequelize,
	modelName: 'review',
	timestamps: true,
}
)


module.exports = Review