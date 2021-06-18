const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var snow;

var bg = "snow1.jpg";
var snow = "snow5.webp"
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    snow
}

function draw(){
     // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    //spawnsnow();
    snow.display();
    // write code to display time in correct format here
    fill("black");
    textSize(30);

    if(hour>=12){
        text("Time : "+ hour%12 + " PM", 50,100);
       }else if(hour==0){
         text("Time : 12 AM",100,100);
       }else{
        text("Time : "+ hour%12 + " AM", 50,100);
       }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06 ){
        debugger;
        bg = "snow1.jpg";
    }else if(hour>=06 && hour<=08 ){
        debugger;
        bg = "snow2.jpg";
    }else if(hour>=08 && hour<=11 ){
        debugger;
        bg = "snow3.jpgg";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}


  
 

  