var t1CompleteBatCheck = document.getElementById("t1CompleteBatCheck");
var mainInfo = document.getElementById("mainInfo");
var t1FinalScorePara = document.createElement("p");
var t1FinalScoreTitle = t1FinalScorePara.createTextNode("Team 1 Final Score");
t1FinalScorePara.appendChild(t1FinalScoreTitle);
t1FinalScorePara.setAttribute("id", "t1FinalScorePara");
mainInfo.appendChild(t1FinalScorePara);

function t1FinalScore(){
	
	// if($('#t1CompleteBatCheck').attr('checked')){
	// 	show(mainInfo);
	// }
	// }
	alert("test");
	$(document).ready(function(){
		$('input[id="#t1CompleteBatCheck"]').click(function(){
			alert("check");
			$('#t1FinalScorePara').show();
		});
	});
}