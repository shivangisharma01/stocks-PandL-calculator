var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var checkBtn = document.querySelector("#check-btn");
var outputBox = document.querySelector("#output");
var body = document.querySelector(".body");
var image = document.querySelector(".bg");
var containerColor = document.querySelector(".container");
var footerColor = document.querySelector("#footer");
var checkBtnColor = document.querySelector("#check-btn");
checkBtn.addEventListener('click', submitHandler);

function submitHandler() {
     var ip = Number(initialPrice.value);
     var qty = Number(stocksQuantity.value);
     var curr = Number(currentPrice.value);
     if (ip && qty && curr) {
          calculateProfitAndLoss(ip, qty, curr);
     } else {
          showOutput(`Please enter all three fields`);
     }
}



function calculateProfitAndLoss(initial, quantity, current) {

     if (initial > current) {
          var loss = (initial - current) * quantity;
          var lossPercentage = (loss / (initial * quantity)) * 100;
          image.style.backgroundImage = 'url(loss.jpg)';
          containerColor.style.backgroundColor = 'red';
          footerColor.style.backgroundColor = 'red';
          checkBtnColor.style.backgroundColor ="white";
          showOutput(`Whoopsie!😥  Your loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)} %`);

     } else if (current > initial) {
          var profit = (current - initial) * quantity;
          var profitPercentage = (profit / (initial * quantity)) * 100;
          image.style.backgroundImage = 'url(profit.png)';
          containerColor.style.backgroundColor = 'green';
          footerColor.style.backgroundColor = 'green';
          checkBtnColor.style.backgroundColor ="white";
          showOutput(`hurray! 🎉 Your Profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(2)} %`);


     } else {
          containerColor.style.backgroundColor = '#fdfb80';
          footerColor.style.backgroundColor = '#fdfb80';
          checkBtnColor.style.backgroundColor ="white";
          image.style.backgroundImage = 'url(power.jpg)';
          showOutput(`No pain no gain 🤖, No gain no pain 😎`);
     }

}

function showOutput(message) {
     outputBox.innerHTML = message;
}