let teach_data = require('../data/zh-cn/toolsteach-data')
module.exports = [
   (session)=>{
       session.send(teach_data.introduce);
        session.endDialog(teach_data.url);
    }
]