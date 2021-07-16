// declare vars 

// players array 
var players = [document.getElementById("player1"),document.getElementById("player2"),document.getElementById("player3"),document.getElementById("player4"),document.getElementById("player5")]

// name entering first stage 

var intitlies = [document.getElementById("first"),document.getElementById("second"),document.getElementById("third"),document.getElementById("fourth"),document.getElementById("fifth"),]

// declaring submitting btn 
var popUp = document.getElementById("pop-up");
var nameSubmitBtn = document.getElementById("start");

nameSubmitBtn.addEventListener("click", function() {
    for(i = 0 ; i < players.length ; i = i +1 ){
        players[i].innerText = intitlies[i].value
    }

    popUp.classList.toggle("pop-up-names-vis");
    popUp.classList.toggle("pop-up-names-hidden")


})

// start calc 

var record = document.getElementById("record");

var inputsField = [document.getElementById("input-1"),document.getElementById("input-2"),document.getElementById("input-3"),document.getElementById("input-4"),document.getElementById("input-5"),]

var totals = [document.getElementById("total-1"),document.getElementById("total-2"),document.getElementById("total-3"),document.getElementById("total-4"),document.getElementById("total-5")]

record.addEventListener("click", function(){

    for(i = 0; i < players.length; i = i +1 ){
        if ( totals[i].innerText == ""){
            totals[i].innerText = 0;
        }
        if ( inputsField[i].value == ""){
            inputsField[i].value = 0;
        }
        totals[i].innerText = parseInt(inputsField[i].value) + parseInt(totals[i].innerText)
       
       
    }
 
    

})