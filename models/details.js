/*** Created by sajid khaki on 5/12/2017.*/
var sequelize = require("sequelize");
var db = require("./../datasource/dbconfig");
 var details= db.define('invoice',{//table name invoice

     customername:sequelize.STRING,
     contact:sequelize.INTEGER,             ///table fields
     address:sequelize.STRING,
     itemname:sequelize.STRING,
     quantity:sequelize.INTEGER,
     price:sequelize.DECIMAL(2,2),
     grandtotal:sequelize.DECIMAL(5,2)
 });

 module.exports= details;