let community_data = require('../data/zh-cn/Community-data')

var builder = require("botbuilder");


module.exports = [
    (session) => {
        //session.send(hello_data.hello);
        builder.Prompts.confirm(session,community_data.hello);
    },

    

    function (session, results) {
        if(results.response){
            
            session.send(community_data.introduce);
             builder.Prompts.confirm(session,community_data.third);
        }else{
            session.endDialog(community_data.exit)
        }
    },

 

    function (session, results) {
        if(results.response){
            session.beginDialog('showShirts')
            session.beginDialog('showShirt2')
            session.beginDialog('showShirt3')
           session.send(community_data.second).endDialog();
           //console.log(community_data.second)
          //  builder.Prompts.text(session,community_data.second);
        }else{
            session.endDialog(community_data.exit)
        }
    },



    

]