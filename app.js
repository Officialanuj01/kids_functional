const addBtn = document.querySelectorAll(".add");
const cart = document.getElementById("cart-value");
const itemDetails = document.getElementById("itemDetails")
var totalItem = 0
var cartDetails = ''

let itemDescription = [
    {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
    },
    {
        name: "The famous five",
        quantity: 0,
        dollars: 4,
        cents: 59,
    },
    {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
    },
    {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
    },
    {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
    },
    {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
    },
    {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
    },
    {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,
    },
    {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
    },
    {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
    },
    {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
    },
    {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
    },
    {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
        cents: 49,
    },
]

addBtn.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        if(index>=0 && index <= 14){
            itemDescription[index].quantity = itemDescription[index].quantity + 1;
            let details = `Item name: ${itemDescription[index].name}-Quantity: ${itemDescription[index].quantity} `
            cartDetails += details
            totalItem++
            cart.textContent = `${totalItem}`
        }
        
        
    })
    
})



cart.addEventListener("click", () => {
    console.log(cartDetails);
})




