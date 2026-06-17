function calculate(){
  let num1 = parseFloat(document.getElementById('digit1').value);
  let num2 = parseFloat(document.getElementById('digit2').value);
  let sum = num1+num2;
  document.getElementById('rest').style.visibility="visible";
   document.getElementById('digit3').value= sum;
}