
function calc(){const w=parseFloat(document.getElementById('weight').value);
const h=parseFloat(document.getElementById('height').value);
if(!w||!h){alert('Preencha todos os campos');return;}
const imc=w/(h*h);let status='';
if(imc<18.5)status='Abaixo do peso / Underweight';
else if(imc<25)status='Normal';
else if(imc<30)status='Sobrepeso / Overweight';
else status='Obesidade / Obesity';
document.getElementById('result').textContent=`IMC: ${imc.toFixed(2)} - ${status}`;}
