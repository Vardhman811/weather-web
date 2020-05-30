const request=require('request')
const forecast =(city,callback)=>{
    const url ='https://samples.openweathermap.org/data/2.5/weather?q='+city+'&appid=439d4b804bc8187953eb36d2a8c26a02'
    request({url:url,json:true},(error,response)=>{
    if(error)
    {
       callback('Unable to connect',undefined)
    }else if(response.body.error){
        callback('Unable to find',undefined)
    }else
    {
        callback(response.body.main.temp,undefined)
    }
    })
}
module.exports=forecast