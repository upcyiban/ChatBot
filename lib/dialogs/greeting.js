let hello_data = require('../data/zh-cn/greeting-data')
module.exports = [
   (session)=>{
        session.send(hello_data.hello);
    }
]