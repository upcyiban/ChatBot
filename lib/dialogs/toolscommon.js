let common_data = require('../data/zh-cn/toolscommon-data')
module.exports = [
   (session)=>{
       session.send(common_data.introduce);
        session.endDialog(common_data.url);
    }
]