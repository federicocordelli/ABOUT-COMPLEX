var karma = 0;
var txt = "I";
var i = 200;
let mySound;
let txtScroll;
var about = 0;
let scroll = 0;
var o1 = 0;
var o2 = 0;
let scrall = 0;
var onClick=0;
var colorTitle = '#f56c63';
var colorCorpus = '#b9c990';








function preload() {

 soundFormats('mp3');
mySound = loadSound('addons/theshepherd_audio');

  titleFont = loadFont('addons/Daubenton.otf');
  corpusFont = loadFont('addons/Ortica-Light.otf');
  intlMed = loadFont('addons/SuisseIntl-Medium.otf');
  intlReg = loadFont('addons/SuisseIntl-Regular.otf');
  intlBol = loadFont('addons/SuisseIntl-Bold.otf');
  druk = loadFont('addons/DrukCond-Super.ttf');

cover = loadImage("addons/cover+titolo.png")





}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight, WEBGL);
  noSmooth();


  //Button To START
  buttonST = createButton('BACK TO HOME');
  buttonST.position(width/2, (height-100));
  buttonST.mouseClicked(starty);
  buttonST.addClass('button');
  buttonST.center('horizontal');

}

function draw() {
  background('#001110');
  console.log(scroll);
  var titleTextSize = (width/20);
  var subTitleTextSize = (width/60);
  var paragraphTextSize = (width/70);
  var creditsTextSize = (width/90);
  var heightTitle = (height/6);
  var heightSubTitle = (height/4.5);
  var heightParagraph = (height/2.9);
  var heightCredits1 = (height/5)*3;
  var heightCredits2 = (height/4.7)*3;
  var heightCredits3 = (height/4.2)*3;
  var heightCredits4 = (height/4)*3;


  push();
  textAlign(LEFT);
  fill(colorTitle);
  textFont(intlBol);
  textSize(titleTextSize);
  text("What is this project?",200,heightTitle);
  pop();
  push();
  textAlign(LEFT);
  textFont(intlMed);
  fill(colorTitle);
  textSize(subTitleTextSize);
  text('This is a university project for the course "Complex Artefacts and Design System Studio"\nat the first year of the master degree in "Communication Design" at Politecnico di Milano.',200,heightSubTitle);
  pop();
  push();
  textAlign(LEFT);
  fill(colorCorpus);
  textFont(intlMed);
  textSize(paragraphTextSize);
  text("Starting from the 15.8 point of the ONU's AGENDA 2030, \nwe developped an interactive story to sensibilize about alien species \nand ecosystems preservation.\n\nDive yourself on this adventure, scroll to discover its protagonists!",300,heightParagraph);
  pop();

  push();
  textAlign(LEFT);
  fill(colorTitle);
  textFont(intlBol);
  textSize(creditsTextSize);
  text("Credits",width/4,heightCredits1);
  pop();
  push();
  textAlign(LEFT);
  fill(colorCorpus);
  textFont(intlMed);
  textSize(creditsTextSize);
  text("Calabria Carlotta\nCordelli Federico\nPiemontese Yuri Michele\nUrietti Lorenzo\nZaccaria Valentina",(width/4)+20,heightCredits2);
  pop();

  push();
  textAlign(LEFT);
  fill(colorTitle);
  textFont(intlBol);
  textSize(creditsTextSize);
  text("Professors",(width/3)*2,heightCredits1);
  pop();
  push();
  textAlign(LEFT);
  fill(colorCorpus);
  textFont(intlMed);
  textSize(creditsTextSize);
  text("Ciancia Mariana\nMariani Ilaria",((width/3)*2)+20,heightCredits2);
  pop();

  push();
  textAlign(LEFT);
  fill(colorTitle);
  textFont(intlBol);
  textSize(creditsTextSize);
  text("Assitant Professors",(width/3)*2,heightCredits3);
  pop();
  push();
  textAlign(LEFT);
  fill(colorCorpus);
  textFont(intlMed);
  textSize(creditsTextSize);
  text("Granato Marco\nInterlandi Giulio\nMattana Walter",((width/3)*2)+20,heightCredits4);
  pop();



  imageMode(CENTER);

push();
noStroke();
fill("#232105")
rect(0,0,windowWidth/2,0+scrall);
pop();
push();
  fill('#a96e60');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(titleTextSize);
  text("EARTH", width/4, -3+(scrall*0.4));
pop();
push();
  fill('#a96e60');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(paragraphTextSize);
  text("Susy Doc Duval", (width/8), -3+(scrall*0.9));
pop();
push();
  fill('#a96e60');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(paragraphTextSize);
  text("Titus Titan Van Houten", (width/8)*3, -3+(scrall*0.9));
pop();

push();
noStroke();
fill("#041d1a")
rect(windowWidth/2,windowHeight,windowWidth/2,0-scrall);
pop();
push();
push();
  fill('#a9a560');
  textAlign(CENTER);
  textFont(intlBol);
  textSize(titleTextSize);
  text("MYCENAE", (width/4)*3, (height+100)-(scrall*0.68));
pop();
push();
  fill('#a9a560');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(paragraphTextSize);
  text("Vicary Van Houten", ((width/2)/6)*7, (height+100)-(scrall*0.2));
pop();
push();
  fill('#a9a560');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(paragraphTextSize);
  text("Connor Reece", ((width/2)/6)*9, (height+100)-(scrall*0.2));
pop();
push();
  fill('#a9a560');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(paragraphTextSize);
  text("Wilfrid Izgrid", ((width/2)/6)*11, (height+100)-(scrall*0.2));
pop();
/*
if (about === 1) {
  fill(0,20,0,180);
  rect(0,0,windowWidth,windowHeight);
  noStroke();
  fill('yellow');
  rect((width/2)-300,(height/2)-400,600,800,120,120,120,120);

push();
textFont(intlMed);
textAlign(CENTER,CENTER);
fill('black');
textSize(25);
  text("this is a university project",width/2,(height/2));
pop();
push();
  fill('black');
  textAlign(CENTER);
  textFont(intlMed);
  textSize(10);
  //text(karma, width/2, height/2);
  text("Complex Artefacts and Design System Studio \n- Carlotta Calabria, Federico Cordelli, Yuri Michele Piemontese, Valentina Zaccaria - \nProfessors: Ilaria Mariani - Mariana Ciancia", width/2, (height/2)+350);
pop();
}
*/
if (scroll>0 && scroll<windowHeight) {

about=0;
scrall = scroll;
buttonST.removeClass('button');
buttonST.addClass('buttonUsed');

onClick=0;


} else if (scroll <= 0 && about ===0) {
  scroll= 0;
  scrall= 0;
  buttonST.removeClass('buttonUsed');
  buttonST.addClass('button');

  onClick=0;

}
 if (scroll >= windowHeight) {
   about=0;
   scrall = windowHeight;
   scroll = windowHeight;
    onClick=1;

   if (mouseX<=width/2) {
     push();
     fill(255,255,255,100);
     rect(0,0,width/2,height);
     pop();
   } else if(mouseX > width/2) {
     push();
     fill(255,255,255,100);
     rect(width/2,0,width/2,height);
     pop();
   }

}

push();
textFont(corpusFont);
textAlign(LEFT);
fill(248,241,216,o1);
textSize(25);
  text("Introduction\nThe Shepherd\nThe Echoing Green\nThe Lamb\nThe Little Black Boy\nThe Blossom\nThe Chimney-Sweeper\nThe Little Boy Lost\nThe Little Boy Pound\nLaughing Song\nA Cradle Song\nThe Divine Image\nHoly Thursday\nNight\nSpring\nNurse’s Song\nInfant Joy\nA Dream\nOn Another’s Sorrow",500,(height/2)-143);
pop();


push();
textFont(corpusFont);
textAlign(LEFT);
fill(248,241,216,o2);
textSize(25);
  text("Introduction\nEarth’s Answer\nThe Clod and the Pebble\nHoly Thursday\nThe Little Girl Lost\nThe Little Girl Found\nThe Chimney-Sweeper\nNurse’s Song\nThe Sick Rose\nThe Fly\nThe Angel\nThe Tiger\nMy Pretty Rose-Tree\nAh, Sunflower\nThe Lily\nThe Garden of Love\nThe Little Vagabond\nLondon\nThe Human Abstract\nInfant Sorrow\nA Poison Tree\nA Little Boy Lost\nA Little Girl Lost\nA Divine Image\nA Cradle Song\nThe Schoolboy\nTo Tirzah\nThe Voice of the Ancient Bard",500,(height/2)-63);
pop();





}



function windowResized() {
  resizeCanvas(windowWidth,windowHeight);
  //resizeCanvas(displayWidth, displayHeight, WEBGL);

  return false;
}


function starty() {
  // window.open("https://federicocordelli.github.io/HOME-COMPLEX/");
  window.open("https://federicocordelli.github.io/HOME-COMPLEX/","_self");
}

function mouseClicked() {
  if (onClick===1) {
    if (mouseX <= width/2) {
      window.open("https://federicocordelli.github.io/ABOUT-COMPLEX-EARTH","_self");
    } else if (mouseX>width/2) {
      window.open("https://federicocordelli.github.io/ABOUT-COMPLEX-MYCENAE","_self");
    }
  }
}



function mouseWheel(event) {
  print(event.delta);

  //move the square according to the vertical scroll amount
  txtScroll += event.delta;
  scroll += event.delta;

  //uncomment to block page scrolling
  //return false;
}
