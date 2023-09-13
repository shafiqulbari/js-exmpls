function textChange(){
document.getElementById('h2').innerHTML="Shall we?";
}

function showDate(){
    document.getElementById('d_h2').innerHTML=Date();
}

function bulbOn(){
document.getElementById('img').src="images/on.gif";}

function bulbOff(){
document.getElementById('img').src="images/off.gif";
}

function fChange(){
document.getElementById('f_h2').style.fontSize="60px";
    }

function t_show(){
    document.getElementById('t_sh').style.display="block";
}
function t_hide(){
    document.getElementById('t_sh').style.display="none";
}

function wAlert(){
    window.alert('holaaa');
}

var number1 = 10;
var number2 = 27;

var data = number1 + number2;

function s_output(){
    document.getElementById('v_out').innerHTML=data;
}