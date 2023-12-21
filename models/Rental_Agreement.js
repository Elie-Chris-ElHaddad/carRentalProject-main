const { DataTypes } = require("sequelize");
const sequelize = require("../Database/configSqlz");
const User = require("../models/user");
const Car = require("./Car");

/**
 * RentalAgreement model definition.
 * @name RentalAgreement
 * @type {object}
 * @const
 */
const RentalAgreement = sequelize.define(
  "RentalAgreement",
  {
    /**
     * Unique identifier for the rental agreement.
     * @name RentalAgreement#Agreement_id
     * @type {number}
     * @primaryKey
     * @autoIncrement
     */
    Agreement_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    /**
     * Date when the car is picked up for rental.
     * @name RentalAgreement#Pick_up_Date
     * @type {Date}
     */
    Pick_up_Date: {
      type: DataTypes.DATE,
    },

    /**
     * Date when the car is returned after rental.
     * @name RentalAgreement#Return_Date
     * @type {Date}
     */
    Return_Date: {
      type: DataTypes.DATE,
    },

    /**
     * Total rental price for the agreement.
     * @name RentalAgreement#Total_Price
     * @type {number}
     * @type {DECIMAL}
     */
    Total_Price: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    /**
     * Sequelize table configuration.
     * @name RentalAgreement#sequelizeTableConfig
     * @type {object}
     * @const
     */
    tableName: "rentalagreement",

    /**
     * Disable createdAt and updatedAt columns.
     * @name RentalAgreement#timestamps
     * @type {boolean}
     * @const
     */
    createdAt: false,
    updatedAt: false,
  }
);

/**
 * Define associations with other models.
 * @name RentalAgreement#associations
 * @type {object}
 * @const
 */
User.hasMany(RentalAgreement, { foreignKey: "User_ID" });
Car.hasMany(RentalAgreement, { foreignKey: "Car_ID" });

/**
 * Exports the rental agreement model for use in other modules.
 * @name module:models/Rental_Agreement
 * @type {object}
 */
module.exports = RentalAgreement;
