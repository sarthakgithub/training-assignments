//function readBlob() {
//
//    var files = document.getElementById('files').files;
//    if (!files.length) {
//        alert('Please select a file!');
//        return;
//    }
//    var file = files[0];
//
//    console.log(file.type);
//
//    var MIMEType = file.type;
//
//    // decode base64 string, remove space for IE compatibility
//    var reader = new FileReader();
//
//    reader.onload = function(readerEvt) {
//
//        // This is done just for the proof of concept
//        var binaryString = readerEvt.target.result;
//        var base64 = btoa(binaryString);
//        var blobfile = atob(base64);
//
//
//        window.blobFromBlobFile = b64toBlob(base64, MIMEType, 512);
//        window.blobURL = URL.createObjectURL(window.blobFromBlobFile);
//
//
//        if (MIMEType != "image/jpeg") {
//            var a = "<br /><a href=\"" + window.blobURL + "\">Blob File Link</a>";
//        } else {
//            var a = "<img src=" + window.blobURL + "\>";
//        }
//
//        document.getElementById('byte_content').innerHTML = a;
//
//    };
//
//    reader.readAsBinaryString(file);
//}
//
//document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
//    if (evt.target.tagName.toLowerCase() == 'button') {
//        readBlob();
//    }
//}, false);
//
//function changefunction(args) {
//    readBlob();
//}
//
//function b64toBlob(b64Data, contentType, sliceSize) {
//    contentType = contentType || '';
//    sliceSize = sliceSize || 512;
//
//    var byteCharacters = atob(b64Data);
//    var byteArrays = [];
//
//    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//        var slice = byteCharacters.slice(offset, offset + sliceSize);
//
//        var byteNumbers = new Array(slice.length);
//        for (var i = 0; i < slice.length; i++) {
//            byteNumbers[i] = slice.charCodeAt(i);
//        }
//
//        var byteArray = new Uint8Array(byteNumbers);
//
//        byteArrays.push(byteArray);
//    }
//
//    var blob = new Blob(byteArrays, {type: contentType});
//    return blob;
//}

var file_upload = document.getElementById('file_upload');
file_upload.addEventListener('change',function(){
    var files = this.files;
    if(files[0].type.match('image')){
        readFile(files[0]);
    }
})

function readFile(file){
    var reader = new FileReader();
    reader.onload  = function(e){
        var image_content = e.target.result;
        var img = document.createElement('img');
        img.src = image_content;
        document.body.appendChild(img)
    }
    reader.readAsDataURL(file);

}

var xhr = new XMLHttpRequest()
var f=document.getElementById("file_upload");
f.addEventListener('change',function() {
    var formData = new FormData();
    formData.append("myFile", document.getElementById("file_upload").files[0]);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/post");
    xhr.send(formData);
});

//
var xhr = new XMLHttpRequest();
xhr.open('GET', 'flower.jpg', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
    if (this.status == 200) {
        var blob = new Blob([this.response], {type: 'image/jpg'});

    }
};

xhr.send();

//
var file_upload = document.getElementById('file_upload');
file_upload.addEventListener('change',function(){
    var files = this.files;
    if(files[0].type.match('image')){
        readFile(files[0]);
    }
})

function readFile(file){
    var reader = new FileReader();
    reader.onload  = function(e){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'flower.jpg', true);
        xhr.responseType = 'blob';

        xhr.onload = function(e) {
            if (this.status == 200) {
                var blob = new Blob([this.response], {type: 'image/jpg'});

            }
        };

        xhr.send();
    }
    reader.readAsBinaryString(file);
}
