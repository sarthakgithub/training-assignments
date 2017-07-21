/**
 * Created by SAKH on 12-07-2017.
 */
var keyArr = ['key1','key2','key3'];
var inititalTime = Date.now();
var keyObj = [{name: 'a',age :1},{name: 'b',age :2},
    {name: 'c',age :3}];



function settingLocalStorage(){
    for(i=0;i<keyArr.length;i++){
        var addingTimestamp = keyObj[i];
        addingTimestamp.initialTime  = Date.now();
        keyObj[i] = addingTimestamp;
        localStorage.setItem(keyArr[i],JSON.stringify(keyObj[i]));
    }
}

function deletingItem(){

    var toDelete = prompt('please enter the key you want to delete','');
    if(Date.now() >= JSON.parse(localStorage.getItem(toDelete)).initialTime){
        localStorage.removeItem(toDelete);
    }
}