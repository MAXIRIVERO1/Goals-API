const DataType = require("sequelize");


module.exports = (sequelize) => {
    sequelize.define("Goal", {
        id : {
            type : DataType.UUID,
            defaultValue : DataType.UUIDV4,
            primaryKey : true
        },
        title : {
            type: DataType.STRING,
            allowNull: false
        },
        description: {
            type: DataType.STRING,
            allowNull: false
        },
        deadline: {
            type: DataType.DATE,
            allowNull: true
        }
    }, {
        timestamps: false
    })
};