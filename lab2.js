/* 
Jeroen Faasse
Applicatie ontwikkeling niveau 4, Davinci College Gorinchem
*/

const ALERT = alert('U dient de volgende 3 vragen te beantwoorden.');       //geeft een constante alert aan

var firstname = prompt('Vul je voornaam in');                               //maakt een variabele aan en vraagt naar de voornaam
var surname = prompt('Vul je achternaam in');                               //maakt een variabele aan en vraagt naar de achternaam
var age = prompt('Vul je leeftijd in');                                     //maakr een variabele aan en vraagt naar de leeftijd

document.write("<br>Je voornaam: " + firstname);                            //vraagt naar de voornaam en laat het zien
document.write("<br>Je achternaam: " + surname);                            //vraagt naar de achternaam en laat het zien
document.write("<br>Je leeftijd: " + age);                                  //vraagt naar de leeftijd en laat het zien