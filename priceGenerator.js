const head = document.getElementById('btn2');
function calculatePrice(){
    let price1 = document.getElementById('price1').value;
    let price2 = document.getElementById('price2').value;
    let totalPrice = parseFloat(price1)+parseFloat(price2);
    document.getElementById('totalPrice').value =  totalPrice ;
}
head.addEventListener("click", calculatePrice);














