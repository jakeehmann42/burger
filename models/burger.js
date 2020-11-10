const orm = require("../config/orm.js");
const burger = {
    create: function(name,cb) {
        orm.create("burgers", [
            "burger_name",
            "devoured"
        ],
        [
            name, false
        ],cb)
    },

    all: function(cb) {
        orm.all ("burgers", function(res) {
            cb(res)
        })
    } 
    //update:
}









module.exports = burger;