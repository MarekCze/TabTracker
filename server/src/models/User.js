console.log('models/user.js')

module.exports = function(sequelize, DataTypes){
    sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
}