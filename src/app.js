const path =require('path')
const express=require('express')
const hbs=require('hbs')
const forecast=require('./utils/forecast')

const app=express()
app.set('view engine','hbs')
app.set('views',path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,"../templates/partials"))

app.use(express.static(path.join(__dirname,"../public")))

app.get('',(req,res)=>{
    res.render('index',{
        forecast:'sunny',
        location:'bina',
        title:"Weather",
        name:"VJ"
            })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        forecast:'sunny',
        location:'bina',
        title:"Help",
        name:"VJ"
            })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        name:'VJ',
        location:'bina',
        title:"About",
        name:"VJ"
            })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        res.send({
            error:"serarch error"
        })
    }
    
    

forecast(req.query.address,(data,error) => {
      res.send({
        
            forecast:data,
            address:req.query.address
        
      })
})
          
})

app.get('/product',(req,res)=>{
    if(!req.query.search)
    {
        res.send({
            error:"serarch error"
        })
    }
    console.log(req.query)
    res.send({
        products:[]
            })
})




app.get('*',(req,res)=>{
    res.send("404 not found")
})

app.listen(3000,()=>{
    console.log('server is on port 3000')
})
