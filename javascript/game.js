
var word = ["word", "cow", "zone", "loose","Awkward", "Bagpipes", "Banjo", "Bungler", "oroquet", "Crypt", "Dwarves", "Fervid", "Ivory","Jukebox", "Kayak", "oxygen", "Yacht", "Zombie"];
var guessword=[]; //cow
var guessword1= []; // _ _ _
var computerGuess = word[Math.floor(Math.random() * word.length)];
var computerGuessHide = computerGuess.length;
var remaining= 9; 
var testGuess;
var win = 0;
var lose = 0;
var alreadyGuessed = [];


///////////////



//function
for(var i = 0; i < computerGuess.length; i++){
   guessword[i]= computerGuess.charAt(i).toString().toLowerCase();
}
console.log("guessword: " + guessword);

for(var z= 0; z < computerGuessHide; z++) {
    guessword1[z] = "_";
}



function indexOfAll(array, search) {
    var i = array.indexOf(search), indexes = [];
    while(i !== -1) {
        indexes.push(i);
        i = array.indexOf(search, ++i);
    }
    return indexes;
}
var allArray = indexOfAll(guessword,testGuess);


   console.log(indexOfAll(guessword,testGuess));




function guessfun(array1, replace) {
    for(var i = 0; i<array1.length; i++){
        guessword1[array1[i]]=replace;
    }
    return guessword1;
       
}



document.onkeyup = function(event) {
    
    console.log(event);
    
testGuess= String.fromCharCode(event.keyCode).toLowerCase();

 
    console.log("testGuess:"+testGuess);
    console.log("guessword:"+guessword);
indexOfAll(guessword,testGuess);
    console.log("IndexofAll:"+indexOfAll(guessword,testGuess));
guessfun(indexOfAll(guessword,testGuess),testGuess);
    console.log("guessfun:"+guessfun(allArray,testGuess));
document.getElementById("currentLetter").innerHTML=testGuess;    
document.getElementById("test-Guess").innerHTML=guessword1;
document.getElementById("number").innerHTML=remaining; 
remaining--;
document.getElementById("alreadyGuessed").innerHTML=alreadyGuessed;
document.getElementById("win").innerHTML=win;   
document.getElementById("lose").innerHTML=lose;   

  
    console.log("remaining: " +  remaining);

    alreadyGuessed.push(testGuess);



    if(remaining == -1){
        alert("You lose")
        lose++;
        document.getElementById("lose").innerHTML=lose;  
        reset();
    }
    console.log("guessword1: " + guessword1);
    console.log("guessword: " + guessword);
    console.log("remaining: " + remaining);
    console.log(typeof guessword);
    console.log(typeof guessword1);
  

    if (guessword.join("") === guessword1.join("")) {
        console.log(guessword);
        console.log("firing");
        win++;
        document.getElementById("win").innerHTML = win;   
        alert("!!congratulation!!");
        reset();
    }

} 


function reset(){
    this.guessword=[];
    this.guessword1=[];
    this.remaining=9;
    this.alreadyGuessed=[];

var computerGuess = word[Math.floor(Math.random() * word.length)];
for(var i = 0; i < computerGuess.length; i++){
   guessword[i]= computerGuess.charAt(i).toString().toLowerCase();
}
console.log("guessword: " + guessword);

for(var z= 0; z < computerGuess.length; z++) {
    guessword1[z] = "_";
}
console.log("guessword1: " + guessword1);

   
}
