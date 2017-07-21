import _ from 'lodash';

import "../style1.less";

let toDoApp = () => {
    console.log('transpiling');
    console.log( _.join(['Hello', 'webpack'], ' '));
};

const toDoList = () => {
    console.log('ES6');
}
toDoApp();
toDoList();

export class Calculator{
    add(op1,op2){
        return op1 + op2;
    }
    subtract(op1,op2){
        return op1 - op2;
    }
}