let allcharacters=[
    'A', 'B', 'C', 'D', 'E',  'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P',  'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'a',  'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l',  'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w',  'x', 'y', 'z', '0', '1', '2',
    '3', '4', '5', '6', '7',  '8', '9', '!', '@', '#', '$',
    '%', '^', '&', '*', '(',  ')', '-', '_', '=', '+', '[',
    ']', '{', '}', '|', '\\', ';', ':', "'", '"', ',', '.',
    '<', '>', '/', '?', '`',  '~'
  ]

let length=94;

let generatebtn=document.querySelector('.btn')

let input=document.querySelector('input')
let copybutton=document.querySelector('.cpybtn')
generatebtn.addEventListener('click',start)
copybutton.addEventListener('click',copytoclipboard)

function start()
{
 let password=generaterandom()
 input.value=password
}



function copytoclipboard()
{
    
    let value=input.value
    if(value==='')
    {
        alert('Please click on generate password')
    }
    else
    {
        navigator.clipboard.writeText(value).then(()=>alert('password copied'))
    }
  
}







function generaterandom()
{
    let password=''
    for(let i=0;i<12;i++)
    {
     let char=allcharacters[Math.floor(Math.random()*94)]
     password+=char
    }

    return password
}

