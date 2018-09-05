var tafel = 6;
var num;
var begingetal = 12;										//maakt alle variabelen aan
var uitkomst;

document.write("<br>",1,"x",tafel,"=",1*tafel);
document.write("<br>",2,"x",tafel,"=",2*tafel);
document.write("<br>",3,"x",tafel,"=",3*tafel);
document.write("<br>",4,"x",tafel,"=",4*tafel);
document.write("<br>",5,"x",tafel,"=",5*tafel);
document.write("<br>",6,"x",tafel,"=",6*tafel);				//rekent alle sommen uit
document.write("<br>",7,"x",tafel,"=",7*tafel);
document.write("<br>",8,"x",tafel,"=",8*tafel);
document.write("<br>",9,"x",tafel,"=",9*tafel);
document.write("<br>",10,"x",tafel,"=",10*tafel);


document.write("<br><br>",begingetal , '+', 6, "=");
begingetal = begingetal + 6;
document.write(begingetal);
	
document.write("<br>",begingetal , 'x', 10, "=");
begingetal = begingetal * 10;
document.write(begingetal);
																//maakt de verschillende sommen
document.write("<br>",begingetal , ':', 5 , "=");
begingetal = begingetal / 5;
document.write(begingetal);

document.write("<br>",begingetal , '-', 12 , "=");
begingetal = begingetal - 12;
document.write(begingetal,"<br><br>");


num = prompt("Voer een getal in: ","0");
num = parseInt(num);                                   //laat de gebruiker een getal invoeren en berekent de tafel daarvan
	for (var i = 1; i <=10; i++) {
		document.write(i+"x"+num+"="+i*num+"<br>");
	}
