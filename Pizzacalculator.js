/*Jeroen Faasse Pizzacalculator*/

var small = prompt("Hoeveel kleine pizza's wilt u?","Vul hier uw keuze in");
var medium = prompt("Hoeveel medium pizza's wilt u?","Vul hier uw keuze in");
var large = prompt("Hoeveel grote pizza's wilt u?","Vul hier uw keuze in");
const SMALLPRICE =8.50;
const MEDIUMPRICE =9.50;
const LARGEPRICE =11.00;
var priceSmall = small*SMALLPRICE;
var priceMedium = medium*MEDIUMPRICE;
var priceLarge = large*LARGEPRICE;
var totalPrice = priceSmall+priceMedium+priceLarge;

document.write("U heeft " ,small , " " , "kleine pizza(s)" ,  " " , "€" , small*SMALLPRICE);
document.write("<br>U heeft " , medium , " " ,  "medium pizza(s)" ,    " " , "€" , medium*MEDIUMPRICE);
document.write("<br>U heeft " , large , " " ,  "grote pizza(s)" ,    " " , "€" , large*LARGEPRICE);

document.write("<br><br>Het totaalbedrag is", " " ,"€",totalPrice, ",-");
