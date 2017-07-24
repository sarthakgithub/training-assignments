var sliderTask  = (function(){


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

    function zoomPic(thisPic){
        console.log(event.deltaY);
        if(event.deltaY < 0){
            thisPic.style.transform += "scale(2,2)";
        }
        else{
            thisPic.style.transform += "scale(0.5,0.5)"
        }
    }

    function mousedownEvent(thisdownVal){
        xcordmd = event.clientX;
    }

    function mouseupEvent(thisdownVal){
        xcoordmu = event.clientX;
        console.log('xcordmd' + xcordmd);

        console.log('xcoordmu'  + xcoordmu);
        if((xcordmd - xcoordmu) > 0){
            if(counter < sliderListLength-1){
                slideList.style.transform += "translateX(-300px)";
                slideList.style.transition = "1s";
                counter++;
            }
        }
        else{
            if(counter > 0){
                slideList.style.transform += "translateX(300px)";
                slideList.style.transition = "1s";
                counter--;
            }
        }
    }

    return{
        zoomPic : zoomPic,
        mousedownEvent : mousedownEvent,
        mouseupEvent : mouseupEvent
    }
})();
