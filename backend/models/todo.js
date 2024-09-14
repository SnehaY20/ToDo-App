const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// Sync the model with the database (create table if not exists)
(async () => {
  await sequelize.sync();
  console.log('Todo List table migrated successfully.');
})();

module.exports = Todo;
