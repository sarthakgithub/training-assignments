function sum(a,b,c,d,e){
    return a+b+c+d+e;
}

function partialRight(fn){
    var ar = Array.prototype.slice.call(arguments,1);
    return function(){
        return fn.apply(this, Array.prototype.slice.call(arguments).concat(ar));
    };
}
partialRight(sum, 2,3,4)(0,1);