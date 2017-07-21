var file_upload = document.getElementById('file_upload');
file_upload.addEventListener('change',function(){
    var files = this.files;
    readFile(files[0]);
})

function readFile(file){
    var reader = new FileReader();
    var whatsLoaded=0;
    reader.onload  = function(e){
        var content = e.target.result;
       
        var div = document.createElement('div');
        div.innerHTML = content;
        document.body.appendChild(div)
    }

    //var img = document.createElement('img');
    //img.src = content;
    //document.body.appendChild(img)

    if(file.type.match('image')){
        whatsLoaded = 1;
        reader.readAsDataURL(file);
    }
    if(file.type.match('text/plain')){
        whatsLoaded = 2;
        reader.readAsText(file);
    }
}
