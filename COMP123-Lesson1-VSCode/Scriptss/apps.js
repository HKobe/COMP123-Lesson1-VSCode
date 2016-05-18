//Main JavaScript File
//This is a global scope
//IIFE Imemediately Inovked Function Expression
// Structure, Style/presentation, Behaviour
(function(){ 
    "Use Strict";
    
    //codes in here
/*Console.log("App Started...");
var firstParagraph = document.getElementById("firstParagraph");
firstParagraph.textContent =  "";

   //declare named function
function writeToFirstParagraph() {
    //for debugging only
    console.log("Executing writeToFirstParagraph")
    //create a reference to a p element with an id of "firstParagraph
    var firstParagraph = document.getElementById("firstParagraph");
    firstParagraph.textContent = "My name is Hassan Kobeissi, I'm a Software Engineer at Centennial College.";
}*/
//declare a variable that's pointing towards an anonymous function.
var writeToFirstParagraph = function() {
     //for debugging only
    console.log("Executing writeToFirstParagraph")
    //create a reference to a p element with an id of "firstParagraph
    var firstParagraph = document.getElementById("firstParagraph");
    firstParagraph.textContent = "My name is Hassan Kobeissi, I'm a Software Engineer at Centennial College.";
    
}


})();