/**
 * Created by sajid khaki on 5/12/2017.
 */
var sequelize = require("sequelize");
var temp =new sequelize('billing','root','root',{ // dbname,user,pwd
 host:"localhost",
    dialect:"mysql",
    timezone:"+5:30",
    pool:{   //connections  and idle time
     max:5,
        min:0,
        idle:200000

    }
});
temp.sync({force:false});/// prevents creation of table if olrdy exits on each refresh...
module.exports=temp;