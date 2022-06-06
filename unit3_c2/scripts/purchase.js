var user = JSON.parse(localStorage.getItem('user')) || []
console.log(user[0].amount)
let wallet_balance = document.getElementById('wallet_balance')
wallet_balance.innerText = user[0].amount

let purchase = JSON.parse(localStorage.getItem('purchase')) || []

let purchased_vouchers = document.getElementById('purchased_vouchers')
    purchase.map((ele) => {
        let cart = document.createElement('div')
        cart.setAttribute('class', 'voucher')
        let image = document.createElement('img')
        image.src = ele.image
        let name = document.createElement('p')
        name.innerText = ele.name
        let price = document.createElement('h3')
        price.innerText = ele.price
       
        cart.append(image, name, price)
        purchased_vouchers.append(cart)
    })