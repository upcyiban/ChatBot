let lend_data = require('../data/zh-cn/toolslend-data')
module.exports = [
   (session)=>{
       session.send(lend_data.introduce);
        session.endDialog(lend_data.url);
    }
]