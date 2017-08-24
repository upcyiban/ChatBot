let dao_data = require('../data/zh-cn/toolsdao-data')
module.exports = [
   (session)=>{
       session.send(dao_data.introduce);
        session.endDialog(dao_data.url);
    }
]