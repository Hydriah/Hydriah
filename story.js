"<hi>there were once a group of [animal] that lived in isolation from the rest of the animals in the [region]."

var animal = prompt("what is the name of the animal?");
var sentence ="<hi>there were a group of " +  animal;
var region = prompt("what region please?");
alert("oh great! now lets begin");
var sentence2 =( sentence + " that lived in isolation from the rest of the " + region);
var sentence3 = (sentence2 + ". They were banished from their homes. " + "so they went in search of a new home " + " which turned out to be a new fortress with lots of food and water.");
document.write(sentence3);


var SecondsPerMin = 60;
var MinsPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var daysPerweek = 7;
var weeksPeryear = 52;
var secondsPerDay = SecondsPerMin * MinsPerHour * hoursPerDay;
document.write("there are" + SecondsPerMin + " seconds in a day");
var secondsAlive = secondsPerDay * daysPerYear * 26;
var hoursAlive = hoursPerDay * daysPerYear * 26;
var daysAlive = daysPerweek * weeksPeryear * 26; 
document.write("I have lived " + secondsAlive + " seconds, " + hoursAlive + " hours and " + daysAlive + " days on this earth.");
