
let tools_data = require('../data/zh-cn/tools-data')

let builder = require("botbuilder")

module.exports = [

    function (session) {
        session.send(tools_data.first)
     session.send(tools_data.firstselect);
    }
]