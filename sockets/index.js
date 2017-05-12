/**
 * Created by hp on 5/12/2017.
 */
var sequelize=require('./../datasource/dbconfig');
var details=require('./../models/details');

module.exports=function (io) {
    io.on("connection",function(socket){

        socket.on("senDetails",function(data){




        })

    })
}