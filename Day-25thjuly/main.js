//document.write('hello');

//require("!style-loader!css-loader!./style.css");
//document.write(require('./mymodule.js')); // It's a way to import module
//import {default as sampleid} from './modules/module1.js';
//import {personId,personname,myobj,myId} from './modules/module1.js';
//myobj.a =19;
//myId()


class Person{
    showId(){
        console.log('created class');
    }
}

var p = new Person();
p.showId();