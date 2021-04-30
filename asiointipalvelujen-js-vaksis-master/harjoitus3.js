let minunTervehtys = document.getElementById("tervehdys");
let myName = document.getElementById("nimi");
let myGo1 = document.getElementById("go1");

function tervehdys()
{
    let name = myName.value;
    minunTervehtys.innerText = "Hei " + name, "!";
}
myGo1.addEventListener("click", tervehdys);
//---------------------------------

let myAge = document.getElementById("ageCheck");
let age =document.getElementById("age");
let go2 = document.getElementById("go2");

function CheckAge()
{
    if(age.value < 16) {
        myAge.innerText = "You are too young to play this game!";
    }else if(age.value > 15 && age.value < 101){
        myAge.innerText= "Good you let's continue";
    }else{
        myAge.innerText="You must be honest about your age";
    }
}
go2.addEventListener("click", CheckAge);

//---------------------------------


 // random value generated 
 var y = Math.floor(Math.random() * 10 + 1); 
      
 // counting the number of guesses 
 // made for correct Guess 
 var guess = 1; 
   
 document.getElementById("submitguess").onclick = function(){ 
   
// number guessed by user      
var x = document.getElementById("guessField").value; 

if(x == y) 
{     
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
            + guess + " GUESS "); 
} 
else if(x > y) /* if guessed number is greater 
                than actual number*/ 
{     
    guess++; 
    alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
    guess++; 
    alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 
} 
//---------------------------------