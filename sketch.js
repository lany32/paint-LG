let cor;
let x;
let y;



 function setup() {
  createCanvas(450, 450);
  background("rgb(182,147,190)");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
   
    x = [0,0, 0];
    y = [random(height), random(height), random(height)]
   
  
  }

 function draw() {
   
   x[0] = x[0] + random(0, 3);
   y[0] = y[0] + random(-3,3)
   
   x[1] = x[1] + random(0, 3);
   y[1] = y[1]+ random(-3,3)
   
    x[2] = x[2] + random(0, 3);
   y[2] = y[2]+ random(-3,3)
   
  circle(x[0],y[0],50);
  fill(cor);
   
   circle(x[1],y[1],50);
  fill(cor);
   
   circle(x[2],y[2],50);
  fill(cor);
 
   if(mouseIsPressed){
     
     cor =
       color(random(0, 255), random(0, 255), random(0, 255));
       
   }}