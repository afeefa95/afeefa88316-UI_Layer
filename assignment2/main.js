var counter={
    img1 : 0,
    img2 : 0,
    img3 : 0
};
function myFunction(imgId, spanId){
    console.log("Called on image click");
    let span=document.getElementById(spanId);
    switch(imgId){
        case 'img1' : 
        counter.img1 = counter.img1 + 1;
        span.innerHTML=counter.img1;
            break;
        case 'img2' : 
        counter.img2 = counter.img2 + 1;
        span.innerHTML=counter.img2;
            break;
        case 'img3' : 
        counter.img3 = counter.img3 + 1;
        span.innerHTML=counter.img3;
            break;
    }
    console.log(counter);
}

// var counter=0;
// function myFunction(){
//     console.log("Called on image click");
//     counter=counter+1;
//     console.log(counter);
//     let span=document.getElementById("span1");
//     span.innerHTML=counter;
// }