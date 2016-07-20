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
		//heading created
		var element_interruptionNumberHeading = document.createElement('h3');
		var text_interruptionNumberHeading = document.createTextNode('Interruption ' + j);
		element_interruptionNumberHeading.appendChild(text_interruptionNumberHeading);
		scenario1ints.appendChild(element_interruptionNumberHeading);

		var element_playInterruptedOver = document.createElement('p');
		var text_playInterruptedOver = document.createTextNode('Which over was the play interrupted?	');
		element_playInterruptedOver.appendChild(text_playInterruptedOver);
		var input_playInterruptedOver = document.createElement('input');
		input_playInterruptedOver.setAttribute("type", "text");
		input_playInterruptedOver.setAttribute("id", "input_playInterruptedOver" + j);
		element_playInterruptedOver.appendChild(input_playInterruptedOver);
		scenario1ints.appendChild(element_playInterruptedOver);

		var element_totalAtIntteruption = document.createElement('p');
		var text_totalAtIntteruption = document.createTextNode('Total at the interruption ');
		element_totalAtIntteruption.appendChild(text_totalAtIntteruption);
		var input_totalAtIntteruption = document.createElement('input');
		input_totalAtIntteruption.setAttribute("type", "text");
		input_totalAtIntteruption.setAttribute("id", "input_totalAtIntteruption" + j);
		element_totalAtIntteruption.appendChild(input_totalAtIntteruption);
		scenario1ints.appendChild(element_totalAtIntteruption);

		i++;
	}
}
