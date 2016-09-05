/*
Variable Naming Convention: filename_type_variable come first
*/

var sc1_t2Interruptions;
var sc1_scenario1ints;
var sc1_t2intValue;
// var element_br;

//initializing  variables and setting them up on load.
function scenario1_init(){
	sc1_t2Interruptions = document.getElementById('t2Interruptions');
	scenario1ints = document.getElementById('scenario1ints');
	
	
}

function interruptionhtmlsetup(){
	//delete all the nodes inside the div scenario1ints
	scenario1ints.innerHTML = '';
	t2intValue = t2Interruptions.value;
	maxInterruptions = 3;
	interruptionerror = document.getElementById("interruptionerror");
	interruptionerror.innerHTML = '';
	if(t2intValue > maxInterruptions){
		var element_interruptionsNumberError = document.createElement('p');
		var text_interruptionsNumberError = document.createTextNode('Maximum Number of Interruptions supported is 3');
		element_interruptionsNumberError.appendChild(text_interruptionsNumberError);
		interruptionerror.appendChild(element_interruptionsNumberError);
	}else{
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
}

function calculatescore(){
	var value_numOfOversPerSide = localStorage.getItem("value_numOfOversPerSide");
	alert(value_numOfOversPerSide);
}

