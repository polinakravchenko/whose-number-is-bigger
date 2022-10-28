//const N = 7;
//alert ("Варіант: " + N + "\nКравченко Поліна");

//write username
let usname = prompt("Уведіть ім'я гравця: ");
if (usname != '') {
    document.getElementById('username').value = usname;
} 
else {
  document.getElementById('username').value = "Human";
}

//game
let usernumber = document.getElementById("usernumber");
let compnumber = document.getElementById("compnumber");
const buttonn = document.querySelector('#buttonn');
buttonn.style = "opacity: 0;"

const button = document.querySelector('#button');
button.addEventListener('click', () => {
  randomNumbers();
  countPlayers();
});

function randomNumbers(){
  var userarray = [];
  for (let x=0, y=1; x<y; x++) {
  userarray.push(Math.round(Math.random()*50));
  document.getElementById("usernumber").value=userarray;
  }
  var comparray = [];
  for (let x=0, y=1; x<y; x++){
    comparray.push(Math.round(Math.random()*50));
    document.getElementById("compnumber").value=comparray;
  }
};

var usercount = 0;
var compcount = 0;

function countPlayers(){

  var userarray = Number(document.getElementById("usernumber").value);
  var comparray = Number(document.getElementById("compnumber").value);

  if (userarray > comparray)
  {
    usercount ++;
    document.getElementById('usercount').innerHTML = usercount;
    console.log("Користувач: ");
  }
  else if (userarray < comparray)
  {
    compcount ++;
    document.getElementById('compcount').innerHTML = compcount;
    console.log("Комп'ютер: ");
  }   
  else
  {
    usercount += 0;
    compcount += 0;
  }  

  if(usercount>=3)
  {
    var result = document.getElementById('result');
    result.style='color: rgba(10, 204, 23, 0.907)';
    document.getElementById('result').innerHTML = "Вітаємо! Гравець " + usname + " переміг(-огла) комп'ютер!";
    buttonn.style = "display: block";
  }
  if(compcount>=3)
  {
    var result = document.getElementById('result');
    result.style='color: rgba(234, 67, 25, 0.907)';
    document.getElementById('result').innerHTML = "На жаль, гравець " + usname + " програв(-ла) комп'ютеру! Спробуйте ще раз!";
    buttonn.style = "display: block";
  }

  
  buttonn.addEventListener('click', () => {
    var userarray = [0];
    document.getElementById("usernumber").value=userarray;
    var comparray = [0];
    document.getElementById("compnumber").value=comparray;
    compcount=0;
    document.getElementById('compcount').innerHTML = compcount;
    usercount=0;
    document.getElementById('usercount').innerHTML = usercount;
    document.getElementById('result').innerHTML = " ";
    buttonn.style = "opacity: 0;"
  }
)};
