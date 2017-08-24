let prise_data = require('../data/zh-cn/toolsprise-data')
module.exports = [
   (session)=>{
       session.send(prise_data.introduce);
        session.endDialog(prise_data.url);
    }
]