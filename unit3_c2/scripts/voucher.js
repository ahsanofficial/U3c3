var user = JSON.parse(localStorage.getItem('user')) || []
console.log(user[0].amount)
let wallet_balance = document.getElementById('wallet_balance')
wallet_balance.innerText = user[0].amount

async function print() {
    try {
        let res = await fetch('https://masai-vouchers-api.herokuapp.com/api/vouchers')
        let data = await res.json()
        let rs = await data[0]
        let res2 = await rs.vouchers
        console.log('res2:', res2)
        append(res2)
    } catch (err) {
        console.log('err:', err)
    }
}
print()
let purchase = JSON.parse(localStorage.getItem('purchase')) || []


let voucher_list = document.getElementById('voucher_list')
function append(data) {
    data.map((ele) => {
        let cart = document.createElement('div')
        cart.setAttribute('class', 'voucher')
        let image = document.createElement('img')
        image.src = ele.image
        let name = document.createElement('p')
        name.innerText = ele.name
        let price = document.createElement('h3')
        price.innerText = ele.price
        let btn = document.createElement('button')
        btn.setAttribute('class', 'buy_voucher')
        btn.innerText = 'BUY'
        btn.addEventListener('click', function () {
            purchase.push(ele)
            localStorage.setItem('purchase', JSON.stringify(purchase))

            if (user[0].amount >= ele.price) {
                alert('Hurray! purchase successful')
                user[0].amount = user[0].amount - ele.price
                console.log('user[0].amount:', user[0].amount)
    localStorage.setItem('user',JSON.stringify(user))

                wallet_balance.innerText = user[0].amount

            }
            else {
                alert('Sorry! insufficient balance')
            }
        })
        cart.append(image, name, price, btn)
        voucher_list.append(cart)
    })
}


// localStorage.setItem('user',JSON.stringify(user))
