const weatherform=document.querySelector('form')
const search=document.querySelector('input')
weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(search.value)
    fetch('http://localhost:3000/weather?address='+search.value).then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
})



