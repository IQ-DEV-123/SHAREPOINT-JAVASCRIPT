document.getElementById('my_form').addEventListener('submit',function(event){
    event.preventDefault()
    let form=document.getElementById('my_form')
    let my_form_data= new FormData(form)
    let my_from_obj=Object.fromEntries(my_form_data.entries())
    console.log(my_from_obj)
    
    for (let [name,value] of my_form_data.entries()){
        console.log(`${name}: ${value}`)
    }
})
