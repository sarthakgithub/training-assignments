/**
 * Created by SAKH on 12-07-2017.
 */

Object.prototype.findOwner = function(property){
    var currentObj = this;
    while(currentObj!=null){
        if(currentObj.hasOwnProperty(property)){
            return currentObj;
        }
        else{
            currentObj = currentObj.__proto__;
        }
    }
    return 'property not found';
}






var str = "some string";
str.findOwner('length');