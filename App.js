

function myFunc(){
    var guessNum = document.getElementById("guessNumber").value;
    console.log(guessNum);
    console.log(actualNum);
    if(actualNum == Math.floor(10){
        document.getElementById("aneG").innerText = "Tahminin doğru! Harikasın ❤️";
        location.reload();

        
    }
    else{
        document.getElementById("aneG").innerText = "Tahminin maalesef yanlış. 😪";
        document.getElementById("guessNumber").value ="";
    }
}
