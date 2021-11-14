function Rock(){
	computerNum = Math.random();
		if (computerNum<0.34){
			document.getElementById("message").innerHTML="Draw, this time! The computer chose Rock !";
		}			
		else if (computerNum<=0.67){
			document.getElementById("message").innerHTML="Defeat!! The computer chose Paper!";
		}			
		else{
			document.getElementById("message").innerHTML="Victory!!  The computer chose Scissors!";
		}
}
function Paper(){
	computerNum = Math.random();
		if (computerNum<0.34){
			document.getElementById("message").innerHTML="You Win,Punk! The computer chose Rock";
		}			
		else if (computerNum<=0.67){
			document.getElementById("message").innerHTML="Draw! The computer chose Paper !";
		}			
		else{
			document.getElementById("message").innerHTML="You Lose! The computer chose Scissors!";
		}
}
function Scissors(){
	computerNum = Math.random();
		if (computerNum<0.34){
			document.getElementById("message").innerHTML="You Lost punk! The computer chose Rock!";
		}			
		else if (computerNum<=0.67){
			document.getElementById("message").innerHTML="You win on this occasion! The computer chose Paper!";
		}			
		else{
			document.getElementById("message").innerHTML="Draw this time! The computer chose Scissors !";
		}
}	
