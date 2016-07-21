var t2Interruptions;
var scenario1ints;
var t2intValue;
// var element_br;

//initializing  variables and setting them up on load.
function init(){
	t2Interruptions = document.getElementById('t2Interruptions');
	scenario1ints = document.getElementById('scenario1ints');
	
	
}

function interruptionsetup(){
	//delete all the nodes inside the div scenario1ints
	scenario1ints.innerHTML = '';
	t2intValue = t2Interruptions.value;
	i = 0;

	//dynamically creating all the interruptions
	while(i < t2intValue){
		j = i + 1;
		//nodes created for each element in an interruption dynamically
		var element_interruptionNumberHeading = document.createElement('h3');
		var text_interruptionNumberHeading = document.createTextNode('Interruption ' + j);
		element_interruptionNumberHeading.appendChild(text_interruptionNumberHeading);
		scenario1ints.appendChild(element_interruptionNumberHeading);
		//Which over was the play interrupted?
		var element_playInterruptedOver = document.createElement('p');
		var text_playInterruptedOver = document.createTextNode('Which over was the play interrupted?	');
		element_playInterruptedOver.appendChild(text_playInterruptedOver);
		var input_playInterruptedOver = document.createElement('input');
		input_playInterruptedOver.setAttribute("type", "text");
		input_playInterruptedOver.setAttribute("id", "input_playInterruptedOver" + j);
		element_playInterruptedOver.appendChild(input_playInterruptedOver);
		scenario1ints.appendChild(element_playInterruptedOver);
		//Total at the interruption
		var element_totalAtIntteruption = document.createElement('p');
		var text_totalAtIntteruption = document.createTextNode('Total at the interruption ');
		element_totalAtIntteruption.appendChild(text_totalAtIntteruption);
		var input_totalAtIntteruption = document.createElement('input');
		input_totalAtIntteruption.setAttribute("type", "text");
		input_totalAtIntteruption.setAttribute("id", "input_totalAtIntteruption" + j);
		element_totalAtIntteruption.appendChild(input_totalAtIntteruption);
		scenario1ints.appendChild(element_totalAtIntteruption);
		//Wickets lost at the interruption
		var element_wktsLostAtIntteruption = document.createElement('p');
		var text_wktsLostAtIntteruption = document.createTextNode('Wickets lost at the interruption ');
		element_wktsLostAtIntteruption.appendChild(text_wktsLostAtIntteruption);
		var input_wktsLostAtIntteruption = document.createElement('input');
		input_wktsLostAtIntteruption.setAttribute("type", "text");
		input_wktsLostAtIntteruption.setAttribute("id", "input_wktsLostAtIntteruption" + j);
		element_wktsLostAtIntteruption.appendChild(input_wktsLostAtIntteruption);
		scenario1ints.appendChild(element_wktsLostAtIntteruption);
		//Overs remaining at the end of the interruption
		var element_oversRemainAtIntteruption = document.createElement('p');
		var text_oversRemainAtIntteruption = document.createTextNode('Overs remaining at the end of the interruption ');
		element_oversRemainAtIntteruption.appendChild(text_oversRemainAtIntteruption);
		var input_oversRemainAtIntteruption = document.createElement('input');
		input_oversRemainAtIntteruption.setAttribute("type", "text");
		input_oversRemainAtIntteruption.setAttribute("id", "input_oversRemainAtIntteruption" + j);
		element_oversRemainAtIntteruption.appendChild(input_oversRemainAtIntteruption);
		scenario1ints.appendChild(element_oversRemainAtIntteruption);

		i++;
	}
}

function calculatescore(){
	var test = document.getElementById('input_playInterruptedOver1').value;
	alert(test);
}

