
var _ = require('lodash');
console.log(_.partialRight(((a,b,c,d)=>a+b+c+d) , 3,_)(1,2,4));