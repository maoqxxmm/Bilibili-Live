// dao/userDao.js
// 实现与MySQL的交互

var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('../conf/userSqlMapping');

var pool = mysql.createPool($util.extend({}, $conf.mysql));

var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        })
    } else {
        res.json(ret);
    }
}

module.exports = {
    queryById: function (req, res, next) {
        var id = +req.query.id;
        pool.getConnection(function (err, connection) {
            console.log(err)
            connection.query($sql.queryById, id, function (err, result) {
                jsonWrite(res, result);
                connection.release();
            })
        })
    }
}
