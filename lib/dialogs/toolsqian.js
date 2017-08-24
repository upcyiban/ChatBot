let qian_data = require('../data/zh-cn/toolsqian-data')
module.exports = [
   (session)=>{
       session.send(qian_data.introduce);
        session.endDialog(qian_data.url);
    }
]