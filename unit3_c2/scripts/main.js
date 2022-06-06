function constructor(name,email,address,amount){
    this.name=name,
    this.email=email,
    this.address=address,
    this.amount= +amount
}
let form=document.querySelector('form')
document.getElementById('submit').addEventListener('click',submit)
function submit(){
    event.preventDefault()
   let user =JSON.parse(localStorage.getItem('user')) ||[]
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let address=document.getElementById('address').value
    let amount= document.getElementById('amount').value
 
    let data=new constructor(name,email,address,amount)

    user.push(data)
    localStorage.setItem('user',JSON.stringify(user))

    form.name.value=null
    form.email.value=null
    form.address.value=null
    form.amount.value=null
} 