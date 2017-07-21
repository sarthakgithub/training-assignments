Array.prototype.customReducer = function(fn,value){
    var total= 0,
    i=1, myvalue,myindex,
    length = this.length;
    if(value == undefined){
        myvalue = this[i-1];
        myindex = 1;
    }
    else{
        myvalue = value;
        myindex = 0;
    }
    while(myindex < length){
       total =  fn(this[myindex],myvalue);
        myvalue = total;
        myindex++;
    }
    return total;
}

function sum (sum,value){
    return sum + value;
}

function fact (sum,value){
    return sum*value;
}
[1,2,3].customReducer(sum);

[1,2,3,4].customReducer(fact);
