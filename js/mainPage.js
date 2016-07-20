var t1CompleteBatCheck;
var t1revisedtotalcheck;
var t1scoreafterdlcalc;
var t1wktsafterdlcalc;
var t2oversavailatstart;
var t1revisedtotalcheckbox;

//initializing  variables and setting them up on load.
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

/*Main toggle. checks if user knows team1 score. If he does not, make plans
make the user find it. otherwise send to find team 2 interruptions.
*/
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

/*if the revised score score is already calculated user is asked for that
score. The text boxes will be displayed. Otherwise text boxes will be hidden
*/
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

// This method selects which scenario should be seen by the user
function pageselect(){
	if(t1CompleteBatCheck.checked){
		window.location.href = 'scenario1.html';
	}else{
		if(!t1CompleteBatCheck.checked && !t1revisedtotalcheckbox.checked){
			window.location.href = 'scenario2.html';
		}else{
			window.location.href = 'scenario1.html';
		}
	}

}

// function test(){
// 	alert('checked');
// }


