
    var slideList = document.getElementById('slideList'),
    items = document.getElementsByClassName('items'),
    sliderListLength = items.length,
    counter = 0, count=0,xcoord,xcordmd,xcoordmu,
    nextArrow = document.getElementById('date-nav-next'),
    prevArrow = document.getElementById('date-nav-prev');

    nextArrow.addEventListener("click", callNext);
    prevArrow.addEventListener("click", callPrev);


    function callNext(){
        if(counter < sliderListLength-1){
            slideList.style.transform += "translateX(-300px)";
            slideList.style.transition = "1s";
            counter++;
        }

    }

    function callPrev(){
        if(counter > 0){
            slideList.style.transform += "translateX(300px)";
            slideList.style.transition = "1s";
            counter--;
        }
    }

    function Picture(currentPic){
        if(event.wheelDelta >=120){
            Resize(++count,currentPic);
        }else if (event.wheelDelta <=-120){ 
            Resize(--count,currentPic);
        } 
    }

    function Resize(count,currentPic){
        currentPic.style.zoom = c + '0%';
    }

    function mousedownEvent(thisdownVal){
        xcordmd = event.clientX;
        console.log(xcordmd)
    }

    function mouseupEvent(thisdownVal){
        xcoordmu = event.clientX;
        console.log(xcoordmu)
    }  

    function mousemoveEvent(){
        console.log('mousemove');
    }