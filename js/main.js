// Redirektimi nese nuk ka variabel me emrin name ne localStorage;
if(localStorage.getItem('name') === null){
	window.location.href = 'login.html';
} 

var d = new Date();
console.log(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());

function change_background(){
	if(d.getHours() > 12 && (d.getHours() < 23 && d.getMinutes() < 59)){
		document.body.style.backgroundColor = "#ffffff";
	}else{
		document.body.style.backgroundColor = "#dadada";
	}
}

try{
	change_background();
	console.log('Backgroundi u ndryshua me sukses');
}catch(TypeError){
	console.log('Tagu body nuk eshte krijuar ende, e shtojme ne onload.');
	window.onload = function(){
		change_background();
	}
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
	var zeri1 = new Audio('../sound/blop.mp3');
	var zeri2 = new Audio('sound/blop.mp3');
	zeri1.play()
	zeri2.play()
}
