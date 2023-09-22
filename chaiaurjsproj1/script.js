// document.getElementById('')
const button=document.querySelectorAll('.button');
// console.log(button);
const body=document.querySelector('body')
button.forEach(function(button){
    console.log(button);
    // function(o)
    button.addEventListener('click',function(e)
    {
    console.log(e);
    console.log(e.target);
    // if(e.target.id==="grey")
    // {
    //     body.style.backgroundColor="grey";
    // }
    // if(e.target.id==="yellow")
    // {
    //     body.style.backgroundColor="yellow";
    // }
    // if(e.target.id==="blue")
    // {
    //     body.style.backgroundColor="blue";
    // }
    // if(e.target.id==="white")
    // {
    //     body.style.backgroundColor="white";
    // }


    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    switch (e.target.id) {
        case "grey":
            body.style.backgroundColor='grey'
            break;
        case "blue":
            body.style.backgroundColor='blue'
            break;
        case "yellow":
            body.style.backgroundColor='yellow'
            break;
        case "white":
            body.style.backgroundColor='pink'
            break;
    
        default:
            break;
    }
        // if(e.target.id==='grey')
        // {
        //     body.style.backgroundColor = e.target.id;
        // }

    })
})
