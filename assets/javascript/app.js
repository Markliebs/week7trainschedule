// Link to firebase
var trainData = new Firebase("https://trainschedhw.firebaseio.com/");

// Button to grab information
$("#trainSubmit").on("click", function(){
    
    // Grabs user input
	var Name = $("#trainName").val().trim();
	var Dest = $("#trainDest").val().trim();
	var Time = $("#trainTime").val().trim();
	var Freq = $("#trainFreq").val().trim();
    // var Time = moment($("#trainTime").val().trim(), "DD/MM/YY").format("X");
    
    // Creates local "temporary" object for holding employee data
	var newTrain = {
		name:  Name,
		dest: Dest,
		time: Time,
		freq: Freq
    }
    
    // Uploads employee data to the database
	trainData.push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.dest); 
	console.log(newTrain.time);
	console.log(newTrain.freq)

	// Alert
	alert("Train successfully added!");

	// Clears all of the text-boxes
	$("#trainName").val("");
	$("#trainDest").val("");
	$("#trainTime").val("");
	$("#trainFreq").val("");

    return false;
});