var page;
var State=0;
var IMG7,IMG8,IMG9,IMG10,IMG11,IMG12,IMG13,IMG;
var gs=0;

function preload(){
    IMG13=loadImage("Collage_Maker.jpg");
    IMG12=loadImage("Collage_Maker (2).jpg");
    IMG11=loadImage("Collage_Maker (3).jpg");
    IMG10=loadImage("Collage_Maker (4).jpg");
    IMG9=loadImage("Collage_Maker (5).jpg");
    IMG8=loadImage("Collage_Maker (6).jpg");
    IMG7=loadImage("Collage_Maker (7).jpg");
    IMG=loadImage("IMG_0008.jpg");
}

function setup(){
    createCanvas(1300,600);
    page=new Page();
}
function draw(){
    imageMode(CORNER)
   background(IMG);
   page.display();

   console.log(State);

   imageMode(CENTER);
   if(State!==0){
      if(State===7){
        image(IMG7,650,300,1300,600);
      }
      if(State===8){
        image(IMG8,650,300,1300,600);
      }
      if(State===9){
        image(IMG9,650,300,1300,600);
      }
      if(State===10){
        image(IMG10,650,300,1300,600);
      }
      if(State===11){
        image(IMG11,650,300,1300,600);
      }
      if(State===12){
        image(IMG12,650,300,1300,600);
      }
      if(State===13){
        image(IMG13,650,300,1300,600);
      }
   }
   
}