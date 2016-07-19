var t1CompleteBatCheck;
var t1revisedtotalcheck;
var t1scoreafterdlcalc;
var t1wktsafterdlcalc;
var t2oversavailatstart;
var t1revisedtotalcheckbox;

function init(){
	t1CompleteBatCheck = document.getElementById('t1CompleteBatCheck');
	t1revisedtotalcheck = document.getElementById('t1revisedtotalcheck');
	t1scoreafterdlcalc = document.getElementById('t1scoreafterdlcalc');
	t1wktsafterdlcalc = document.getElementById('t1wktsafterdlcalc');
	t2oversavailatstart = document.getElementById('t2oversavailatstart');
	t1revisedtotalcheckbox = document.getElementById('t1revisedtotalcheckbox');


	t1revisedtotalcheck.style.visibility = 'hidden';
	t1scoreafterdlcalc.style.visibility = 'hidden';
	t1wktsafterdlcalc.style.visibility = 'hidden';
	t2oversavailatstart.style.visibility = 'hidden';
}


function t1finalscore(){
	if(t1CompleteBatCheck.checked){
		t1revisedtotalcheck.style.visibility = 'hidden';
		t1scoreafterdlcalc.style.visibility = 'hidden';
		t1wktsafterdlcalc.style.visibility = 'hidden';
		t2oversavailatstart.style.visibility = 'hidden';
	}else{
		t1revisedtotalcheckbox.checked = true;
		t1revisedtotalcheck.style.visibility = '';
		t1scoreafterdlcalc.style.visibility = '';
		t1wktsafterdlcalc.style.visibility = '';
		t2oversavailatstart.style.visibility = '';
	}
}

function t1revisedscore(){
	if(t1revisedtotalcheckbox.checked){
		t1scoreafterdlcalc.style.visibility = '';
		t1wktsafterdlcalc.style.visibility = '';
		t2oversavailatstart.style.visibility = '';
	}else{
		t1scoreafterdlcalc.style.visibility = 'hidden';
		t1wktsafterdlcalc.style.visibility = 'hidden';
		t2oversavailatstart.style.visibility = 'hidden';
	}
}

// function test(){
// 	alert('checked');
// }


