const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
if (backgroundImg)
background(backgroundImg)

    Engine.update(engine);
    

    // write code to display time in correct format here
  

}

async function getBackgroundImg(){
    

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
var responeJSON = await response.json()
var dt = responseJSON.datetime;
    // write code slice the datetime
var hour = dt.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
if (hour>=4&&hour<=6){
    bg="sunrise1.png"
}else if (hour >= 8 && hour <=11){
    bg="sunrise2.png"
}else if (hour >= 7 && hour <= 17){
    bg="sunrise3.png"
}else if (hour >= 17 && hour <= 18){
    bg="sunset7.png"
}else if (hour >= 0 && hour <= 3){
    bg="sunset11.png"
}

    //load the image in backgroundImg variable here
 backgroundImg= loadImage (bg)
}
