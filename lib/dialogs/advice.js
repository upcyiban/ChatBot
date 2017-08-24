module.exports = [

    (session)=>{

      
        console.log("你好") 

         session.send("谢谢你的建议<br>(反正我们是不会改的)").endDialog();
    }
]