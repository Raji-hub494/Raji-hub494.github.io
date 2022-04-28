var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Jenn";
names[3]="jagu";
names[4]="Paul";
names[5]="frank";
names[6]="larry";
names[7]="Paugan";
names[8]="Jimy";
names[9]="jim"; 

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
