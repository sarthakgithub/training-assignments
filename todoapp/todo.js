var mytodo = (function(){
    var addBtn = document.getElementById("add");
    var inputVal = document.getElementById("inputVal");

    addBtn.addEventListener("click",addToList);

    function Task(taskValue){
        var li = document.createElement('li');
        li.innerText = taskValue;
        var removeTask = document.createElement('input');
        removeTask.setAttribute('type', 'button');
        removeTask.setAttribute("value", "Remove");
        removeTask.addEventListener('click', function(e) {
            li.parentNode.removeChild(li);
        }, false);
        li.appendChild(removeTask);
        return li;
    }
    function enterPressed(e){
        if(e.keyCode == 13){
            addToList();
        }
    }
    function addToList(){
        var inputTextValue = inputVal.value;
        if(inputTextValue){
            var newTask = Task(inputTextValue);
            todo.addTask(newTask);
            inputVal.value = '';
        }
    }
    function toDoList (){
        var self = this;
        self.toDoList = document.getElementById('myList');

        self.addTask = function(task){
            self.toDoList.appendChild(task);
        }
    }

    var todo =  new toDoList();
    return{
        enterPressed : enterPressed
    }
})();