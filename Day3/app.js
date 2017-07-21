/**
 * Created by SAKH on 12-07-2017.
 */
console.log('hello');

var input="name";

function checktype(property){
    if(input.hasOwnProperty(property)) {
        console.log('found string object');
    }
        else{
            if(input.__proto__.__proto__.hasOwnProperty((property))){
                console.log('found Object object');
            }
            else{
                console.log('not found');
            }
        }

}

checktype('valueOf');