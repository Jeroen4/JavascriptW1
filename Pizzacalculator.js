/*Jeroen Faasse Pizzacalculator*/
alert("Welkom bij pizzeria Ria");													//Geeft een welkomstbericht

var small = prompt("Hoeveel kleine pizza's wilt u?",0);
var medium = prompt("Hoeveel medium pizza's wilt u?",0);							//Vraagt naar de keuze pizza
var large = prompt("Hoeveel grote pizza's wilt u?",0);

const SMALLPRICE =8.50;
const MEDIUMPRICE =9.50;															//De prijzen van de pizza's
const LARGEPRICE =11.00;

var priceSmall = small*SMALLPRICE;
var priceMedium = medium*MEDIUMPRICE;												//De berekeningen van de prijzen en totaalprijs
var priceLarge = large*LARGEPRICE;
var totalPrice = priceSmall+priceMedium+priceLarge;

document.write("U heeft " ,small , " " , "kleine pizza(s)" ,  " " , "€" , small*SMALLPRICE);
document.write("<br>U heeft " , medium , " " ,  "medium pizza(s)" ,    " " , "€" , medium*MEDIUMPRICE);  //Geeft weer hoeveel pizza's en laat de prijs daarvan zien
document.write("<br>U heeft " , large , " " ,  "grote pizza(s)" ,    " " , "€" , large*LARGEPRICE);

document.write("<br><br>Het totaalbedrag is", " " ,"€",totalPrice, ",-");			//Berekent en geeft het totaalbedrag weer
