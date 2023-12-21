const { DataTypes } = require("sequelize");
const sequelize = require("../Database/configSqlz");

/**
 * Car model definition.
 * @name Car
 * @type {object}
 * @const
 */
const Car = sequelize.define(
  "Car",
  {
    /**
     * Unique identifier for the car.
     * @name Car#Car_ID
     * @type {number}
     * @primaryKey
     * @autoIncrement
     */
    Car_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    /**
     * Year of the car.
     * @name Car#Year
     * @type {string}
     */
    Year: {
      type: DataTypes.STRING,
    },

    /**
     * Model of the car.
     * @name Car#Model
     * @type {string}
     */
    Model: {
      type: DataTypes.STRING,
    },

    /**
     * Make/Brand of the car.
     * @name Car#Make
     * @type {string}
     */
    Make: {
      type: DataTypes.STRING,
    },

    /**
     * Availability status of the car.
     * @name Car#Availability
     * @type {boolean}
     */
    Availability: {
      type: DataTypes.BOOLEAN,
    },

    /**
     * Rental price per day of the car.
     * @name Car#Price_per_day
     * @type {decimal}
     */
    Price_per_day: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    /**
     * Database table name for the Car model.
     * @name Car.tableName
     * @type {string}
     */
    tableName: "car",

    /**
     * Disable createdAt and updatedAt columns.
     * @name Car.createdAt
     * @name Car.updatedAt
     * @type {boolean}
     */
    createdAt: false,
    updatedAt: false,
  }
);

/**
 * Exports the Car model for use in other modules.
 * @name module:models/Car
 * @type {object}
 */
module.exports = Car;
