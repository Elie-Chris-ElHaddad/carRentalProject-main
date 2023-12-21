const { DataTypes } = require("sequelize");
const sequelize = require("../Database/configSqlz");

/**
 * User model definition.
 * @name User
 * @type {object}
 * @const
 */
const User = sequelize.define(
  "User",
  {
    /**
     * Unique identifier for the user.
     * @name User#User_ID
     * @type {number}
     * @primaryKey
     * @autoIncrement
     */
    User_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    /**
     * Name of the user.
     * @name User#Name
     * @type {string}
     */
    Name: {
      type: DataTypes.STRING,
    },

    /**
     * Last name of the user.
     * @name User#Last_Name
     * @type {string}
     */
    Last_Name: {
      type: DataTypes.STRING,
    },

    /**
     * Email address of the user.
     * @name User#Email
     * @type {string}
     */
    Email: {
      type: DataTypes.STRING,
    },

    /**
     * Phone number of the user.
     * @name User#Phone
     * @type {string}
     */
    Phone: {
      type: DataTypes.STRING,
    },

    /**
     * Password associated with the user.
     * @name User#password
     * @type {string}
     */
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    /**
     * Sequelize table configuration.
     * @name User#sequelizeTableConfig
     * @type {object}
     * @const
     */
    tableName: "user",

    /**
     * Disable createdAt and updatedAt columns.
     * @name User#timestamps
     * @type {boolean}
     * @const
     */
    createdAt: false,
    updatedAt: false,
  }
);

/**
 * Exports the user model for use in other modules.
 * @name module:models/user
 * @type {object}
 */
module.exports = User;
