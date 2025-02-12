// DOM : Document Object Model.
function test(){
    let get=document.getElementsByClassName('get')
    console.log(get)
    for (let i=0 ; i<get.length ; i++){
        get[i].innerHTML="<a>Hello</a>"
        // get[i].classList.add('bg')
        // get[i].classList.toggle('bg')
        // get[i].classList.remove('bg')
        get[i].classList.toggle('back')
        get[i].classList.add('back')
        get[i].classList.remove('bg')
        
    }
    
    
}

