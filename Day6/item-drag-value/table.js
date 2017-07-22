function makeTable(){
	var myTable = $('<div id="tableSet"></div>');
	document.getElementById("dvTable").innerHTML = '';
	var rowCount = parseInt($('#rowBox').val());
	var colCount = parseInt($('#columnBox').val());
	
	for(var i=0;i<rowCount;i++){
		var row = $('<div class="rowElements"></div>').appendTo(myTable);
		for(var j=0;j<colCount;j++){
			$('<div class="colElements"></div>').text("text").appendTo(row);
		}
	}
	myTable.appendTo("#dvTable");
}

// var myApp = myApp || {};

// myApp.updateSliderRow = function (slideAmount) {
//     var display = document.getElementById("chosenrow");
//     var Slidisplay = document.getElementById("sliderow");
//     Slidisplay.value = slideAmount;
//     display.value = slideAmount;

// };
// myApp.updateSliderCol = function (slideAmount) {
//     var display = document.getElementById("chosencol");
//     var Slidisplay = document.getElementById("slidercol");
//     Slidisplay.value = slideAmount;
//     display.value = slideAmount;

// };
// myApp.createTable = function () {
//     var mytable = $('<div id="basicTable"></div>');
//     document.getElementById("dvTable").innerHTML = '';
//     var rows = parseInt($("#chosenrow").val());
//     var cols = parseInt($("#chosencol").val());
//     for (var i = 0; i < rows; i++) {
//         var row = $('<div></div>').appendTo(mytable);
//         for (var j = 0; j < cols; j++) {
//             $('<div class="colElements"></div>').text("text").appendTo(row);
//         }

//     }
//     mytable.appendTo("#dvTable");

// };