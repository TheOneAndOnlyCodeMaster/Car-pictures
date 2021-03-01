myCanvas = document.getElementById("myCanvas");
ctx = myCanvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img ="https://studio.code.org/v3/assets/1iqF0I7fSUUFQ3nBqeoThAfL8TMKDEBVlemFVGmouH0/772df9c4adaa99d5838a939957ed0a77_animated-race-cars-free-download-on-clipartmag_829-324.gif";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_img ="https://cdn.gamedevmarket.net/wp-content/uploads/20191203194912/e107d64cd980fa41ff9b852ad6c6a7f897f83fcb.gif";
car2_x = 10;
car2_y = 100;


function start_your_engines(){
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_img;
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    scar = e.keyCode;
    console.log(scar);
    if(scar == '38'){
        console.log("up");
    }
    if(scar == '40'){
        console.log("down");
    }
    if(scar == '37'){
        console.log("left");
    }
    if(scar == '39'){
        console.log("right");
    }
}