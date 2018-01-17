module.exports = function(sequelize,Datatypes){
  var Burger = sequelize.define("Burger", {
    name: Datatypes.STRING,
    devoured: {
      type: Datatypes.BOOLEAN,
      defaultValue: false
    }
  })
  return Burger;
}
