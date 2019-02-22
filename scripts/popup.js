function strlen(){
	document.getElementById("result").innerHTML=document.getElementById("string").value.length;
}
document.getElementById("string").addEventListener("input",strlen);