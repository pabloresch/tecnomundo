
module.exports = (sequelize, dataTypes) => {
    let alias = "Discount";

    let columns = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        discountCode: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },

        porcentage: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };

    let configurations = {
        tableName: 'discount',
        timestamps: false
    };

    const Discount = sequelize.define(alias, columns, configurations)

    return Discount

}