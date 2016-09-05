var is_t2Interruptions = document.getElementById('t2Interruptions');
var is_input_t1FinalScore = document.getElementById('t1FinalScore');
var is_input_t1Wickets = document.getElementById('t1Wickets');

//checks the number of interruptions and passes through to whichever necessary
function numOfInterruptionsPass(){
        if(is_t2Interruptions.value == 1){
                one_interruption();
        }
}

function one_interruption(){

        var is_input_numOfOversPerSide = document.getElementById('numOfOversPerSide').value;
        //Overs T2 will be playing at start of their inning
        var is_value_numOfOversPerSide = localStorage.getItem("value_numOfOversPerSide");
        alert(is_value_numOfOversPerSide);
        //Team 1 total score at the end of their innings
        // var value_t1FinalScore = input_t1FinalScore.value;
        // //Team 1 wickets at the end of their innings
        // value_t1Wickets = input_t1Wickets.value;
        // //Setting up the key to grab the resource percentage at the start of the match
        // startOfInnsOversWickets = (int) (value_numOfOversPerSide * 100);
        // //resources percentage at the start of the match
        // resAtStartOfMatch = map[startOfInnsOversWickets];
        // alert(resAtStartOfMatch);
        // //Team 2 Overs at the start of the interruption 1
        // var input_overAtInter1Start = document.getElementById('input_playInterruptedOver1');
        // value_overAtInter1Start = input_overAtInter1Start.value;
        // var oversCanPut = overCalculations(value_numOfOversPerSide, value_overAtInter1Start, "minus");
        // //overs remaining at the end of the interruption
        // var oversRemainingInterEnd = document.getElementById('input_oversRemainAtIntteruption1').value;

        // //overs available to bowl cannot be less that 0
        // if (oversCanPut <= 0) {
        //     var wholeOversToS = value_numOfOversPerSide.toString();
        //     alert('Error! Overs must be greater than' + wholeOversToS);
        //     return; 
        // }
        // //Overs available to bowl cannot be less than overs remaining after end of interruption
        // if (oversCanPut <= oversRemainingInterEnd) {
        //     var oversCanPutToS = oversCanPut.toString();
        //     alert('Overs available to bowl cannot be less than ' + oversCanPutToS);
        //     state.setErrorMessageTitle("Invalid Information");
        //     return;
        // }
        // //number of overs per side cannot be less than overs remaining at the start of the interruption
        // if (value_overAtInter1Start > value_numOfOversPerSide) {
        //     alert('Number of overs per side cannot be overs remaining at the start of the interruption 1');
        //     return;
        // }

        // //Team 2 Wickets at the start of the interruption 1
        // var wicketsAtInter1Start = document.getElementById('input_wktsLostAtIntteruption1')
        // if (wicketsAtInter1Start > 10) {
        //     alert('Wickets cannot be greater than 10');
        //     return;
        // }
        
        // //Team 2 Overs and wickets together when the interruption happened to set up key to find resource percentage
        // var oversAndWicketsStartTogether = (int) ((oversCanPut * 100) + wicketsAtInter1Start);
        
        // //resource percentage at the start of the interruption
        // var percentageResourcesAtInterStart = map[oversAndWicketsStartTogether];
        
        // //overs remaining *10 to get rid of decimal
        // var totalOversRemainingPlusWickets = (int) ((oversRemainingInterEnd * 100) + wicketsAtInter1Start);
        
        // //resources left gathered from dataSet at the end of the interruption
        // var resourceCheckForRemainderOvers = map[totalOversRemainingPlusWickets];
        
        // //resources lost at the end of the interruption
        // var resourcesLost = percentageResourcesAtInterStart - resourceCheckForRemainderOvers;
        
        // //resources left at end of interruption
        // var resourcesLeftAtEndInter = resAtStartOfMatch - resourcesLost;
        
        // //setting up target
        // target = (int) ((value_t1FinalScore * (resourcesLeftAtEndInter / resAtStartOfMatch)) + 1.5);

        // alert('to win: ' + target);
}

// //changing over decimal to base 6
//     function overCalculations(x, y, funct) {
//         var z = 0.0;
//         if (funct.equals("plus")) {
//             z = x + y;
//             var doubleToS = z.toString();
//             //not sure
//             var digitCheck = (int) (z + 0.5);
//             digitCheck = digitCheck / 10;
//             var decimal;
//             if (digitCheck == 0) {
//                 decimal = doubleToS.charAt(2);
//             } else {
//                 decimal = doubleToS.charAt(3);
//             }
//             var decimalToInt = parseInt(decimal,10);
//             if (decimalToInt > 5) {
//                 z = z + 0.4;
//             }
//         } else if (funct.equals("minus")) {
//             z = x - y;
//             var doubleToS = z.toString();
//             var digitCheck = (int) (z + 0.5);
//             digitCheck = digitCheck / 10;
//             var decimal;
//             if (z < 0) {
//                 z = -1;
//             } else {
//                 if (digitCheck == 0) {
//                     decimal = doubleToS.charAt(2);
//                 } else {
//                     decimal = doubleToS.charAt(3);
//                 }
//                 var decimalToInt = parseInt(decimal,10);
//                 if (decimalToInt > 4) {
//                     z = z - 0.4;
//                 }
//             }

//         }
//         return z;
// }


