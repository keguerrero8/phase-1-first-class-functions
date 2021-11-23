// function liftWeights() {
//     console.log("Pump iron");
// }
// function runFiveMiles() {
//     console.log("Go for a five-mile run");
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
// }


// function morningRoutine(exercise) {
//     let breakfast;
  
//     if (exercise === liftWeights) { //breakfast will equal protein bar
//       breakfast = "protein bar";
//     } else if (exercise === swimFortyLaps) {
//       breakfast = "kale smoothie";
//     } else {
//       breakfast = "granola";
//     }
  
//     exerciseRoutine(exercise); //so this will will console log "go for a five mule run" and exercise invocation in this case "pump iron"
  
//     // we could give this function a name if we wanted to, but since
//     // it's only available _inside_ morningRoutine(), we don't need to
//     return function () {
//       console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//     };
//   }

//   const afterExercise = morningRoutine(liftWeights);

function receivesAFunction(callbackFunction) {
    callbackFunction()
    return 
}

function returnsANamedFunction() {
    return receivesAFunction 
}

function returnsAnAnonymousFunction() {
    return function () {} 
}


