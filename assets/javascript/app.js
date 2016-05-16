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

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
trainData.on("child_added", function(childSnapshot, prevChildKey){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var Name = childSnapshot.val().name;
	var Dest = childSnapshot.val().dest;
	var Time = childSnapshot.val().time;
	var Freq = childSnapshot.val().freq;

	// Employee Info
	console.log(Name);
	console.log(Dest);
	console.log(Time);
	console.log(Freq);

	// // Prettify the employee start
	// var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
	// // Calculate the months worked using hardconre math
	// // To calculate the months worked 
	// var empMonths = moment().diff(moment.unix(empStart, 'X'), "months");
	// console.log(empMonths);

	// // Calculate the total billed rate
	// var empBilled = empMonths * empRate;
	// console.log(empBilled);

	// // Add each train's data into the table 
	// $("#employeeTable > tbody").append("<tr><td>" + empName + "</td><td>" + empRole + "</td><td>" + empStartPretty + "</td><td>" + empRate + "</td><td>" + empMonths + "</td><td>" + empBilled + "</td></tr>");

});