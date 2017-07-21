function curry(fn,n){
    n = fn.length;

    function getcurryfunction(prev){
        return function(arg){
            var args = prev.concat(arg);
            if(args.length < n){
                return getcurryfunction(args);
            }else{
                return fn.apply(this,args);
            }
        };
    }

    return getcurryfunction([]);
}


function a(arg1,arg2,arg3){
    return arg1 + arg2 + arg3;
}

var b = curry(a);
b('x')('y')('z');