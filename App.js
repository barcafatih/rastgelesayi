var min = Math.ceil(0);
var max = Math.floor(10);

var totalCorrect = 0;

function myFunc(){
    var guessNum = document.getElementById("guessNumber").value;
    console.log(guessNum);
    console.log(actualNum);
    if(actualNum == Math.floor(Math.random() * (max - min + 1)) + min){
        document.getElementById("aneG").innerText = "Tahminin doğru! Harikasın ❤️";
        totalCorrect = totalCorrect + 1;
        document.getElementById("totalCorrect").innerText = totalCorrect;
        
    }
    else{
        document.getElementById("aneG").innerText = "Tahminin maalesef yanlış. 😪";
        document.getElementById("guessNumber").value ="";
    }
}
