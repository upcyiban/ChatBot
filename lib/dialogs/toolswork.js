let work_data = require('../data/zh-cn/toolswork-data')
module.exports = [
   (session)=>{
       session.send(work_data.introduce);
        session.endDialog(work_data.url);
    }
]