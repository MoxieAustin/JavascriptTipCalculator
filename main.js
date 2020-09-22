//const billAmount = parseInt(document.getElementById('amount').value);
//const totalTip = document.getElementById('tip-percent').value;

let btn = document.getElementById('btn').addEventListener('click',buttonClick);
let form = document.getElementById('tip-calc')
let tipSelect = document.getElementById('tip-percent').value

//function calcTip(){
//let totalTip
//tipPercent = document.getElementById('tip-percent')

  //  if(tipPercent === 0.15){
    //    let totalTip = tipPercent * bill
    //} else if(tipPercent === 0.20){
      //  let totalTip = tipPercent * bill
    //} else if(tipPercent === 0.25){
      //  let totalTip = tipPercent * bill
    //} else if(tipPercent === 0.30){
      //  let totalTip = tipPercent * bill
   // } 
//} 

//Collect tip amount
//let tipAmount = tipSelect.addEventListener('click',buttonClick)

//console.log(tipAmount)

//Form Submit Event
form.addEventListener('submit',buttonClick)

function buttonClick(e){
  e.preventDefault();
  let billInput = document.getElementById('amount').value;

  let tipInput = document.getElementById('tip-percent').value;



  let tipTotal = billInput * tipInput;

  dollarTip = "$"+tipTotal.toFixed(2)

  document.getElementById('tip-amount').textContent = dollarTip;


  
  let tipAfterTotal = Number(tipTotal) + Number(billInput);

  tipAfterTotalDollar = "$"+tipAfterTotal

  document.getElementById('bill-text').textContent = tipAfterTotalDollar


  

  console.log(billInput);
  console.log(tipInput);
  console.log(dollarTip);
  
}


//function buttonClick(e){
  //  e.preventDefault()
 //   document.getElementById('tip-amount').textContent='Nope'
    
//}
