Array.prototype.get = function(index) {
  return this[index];
}

Array.prototype.set = function(index, value) {
  this[index] = value;
  return this;
}

Array.prototype.customLength = function(){
	var count=0;
	this.forEach(function(item,index){
		if(typeof index === 'number'){
			count++;
		}
	})
	return count;
}

[1,2,3].customLength();