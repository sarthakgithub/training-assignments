var x = (function(){
    var instance;

    function createInstance() {
        //var object = new Object("I am the instance");
        //return object;
        return {};
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();


var a = x.getInstance();
var b = x.getInstance();
