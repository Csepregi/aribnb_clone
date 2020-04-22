
Database = {
	user: 'postgres',
	password: 'gabor',
	host: 'localhost',
	database: 'nextbnb'
}

const { user, password, host, database } = Database

const Sequelize = require('sequelize')


const sequelize = new Sequelize(database, user, password, {
	host,
	dialect: 'postgres',
	logging: false
})


module.exports = sequelize