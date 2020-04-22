const sequelize = require('../database')
const Sequelize = require('sequelize')

class Review extends Sequelize.Model { }

// "id": "1523",
// "picture": "/img/houses/2.webp",
// "type": "Entire house",
// "town": "Isla Mujeres",
// "title": "The World Famous Seashell House ~ Casa Caracol",
// "price": "70.00",
// "rating": 4.77,
// "reviewsCount": 246,
// "superhost": false

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