let hello_data = require('../data/zh-cn/greeting-data')
module.exports = [
    (session)=>{
        session.endDialog(hello_data.hello)
    }
]