status="";

function preload(){
  img=  loadImage('study_table.jpg');
}
function setup(){
    canvas = createCanvas(640 , 320);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML= "Detecting objects";
}
function modelLoaded(){
    console.log("MODEL LOADED!!");
    status = true;
    objectDEtector.detect(img , gotResult);
}
function gotResult(error , results){
    if(error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img , 0 , 0 , 640, 420);
}