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