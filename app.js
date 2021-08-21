// -------Memory option---------

const eightGb = document.getElementById("eight");
const sixteenGb = document.getElementById("sixteen");

const extraMemoryCost = document.getElementById("memory");

eightGb.addEventListener("click", function(){
    extraMemoryCost.innerText= "0";
    updateTotalPrice();
})
sixteenGb.addEventListener("click", function(){
    extraMemoryCost.innerText = "180";
    updateTotalPrice();
})

// -----------Storage option---------
const twoFiftySixGb = document.getElementById("twoFiftySix");
const fiveTwelveGb = document.getElementById("fiveTwelve");
const oneTeraGb = document.getElementById("oneTera");

const extraStorageCost = document.getElementById("storage");

twoFiftySixGb.addEventListener("click", function(){
    extraStorageCost.innerText= "0";
    updateTotalPrice();
})
fiveTwelveGb.addEventListener("click", function(){
    extraStorageCost.innerText = "100";
    updateTotalPrice();
})
oneTeraGb.addEventListener("click", function(){
    extraStorageCost.innerText = "180";
    updateTotalPrice();
})

// -------------Delivery option------

const free = document.getElementById("free");
const express = document.getElementById("express");

const deliveryCharge = document.getElementById("delivery");

free.addEventListener("click", function(){
    deliveryCharge.innerText= "0";
    updateTotalPrice();
})
express.addEventListener("click", function(){
    deliveryCharge.innerText = "20";
    updateTotalPrice();
})


// -------------Total Price Option--------
const price = document.getElementById("price");
const total = document.getElementById("totalPrice");
const grandTotal = document.getElementById("grandTotal")

function updateTotalPrice(){
    const productPrice = Number(price.innerText);
    const memCost = Number(extraMemoryCost.innerText);  
    const storageCost = Number(extraStorageCost.innerText);
    const delCharge = Number(deliveryCharge.innerText);
    
    const totalPrice = productPrice + memCost + storageCost + delCharge;
    total.innerText = totalPrice;
    grandTotal.innerText= totalPrice;
 
}
// ---------coupon code-----

function handleCouponCode(coupon){
    const couponInput = document.getElementById("couponInput");
    console.log(couponInput.value);
    // const grandTotal = document.getElementById("grandTotal")
    const finalTotal = Number(grandTotal.innerText);
    if(couponInput.value == "stevekaku"){
       grandTotal.innerText = finalTotal*0.8;
       couponInput.value = "";
    }
}