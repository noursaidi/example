let sliderFloors;
let sliderNo;
let noFloors = 30;
let ch = 600
let fp = 3
let fh = 20
let fw = 200
function setup() {
  createCanvas(600, 600);
  let d = createDiv();
  d.style('transform: rotate(90deg);');
  d.position(200, 200);
  slider = createSlider(0, noFloors, noFloors, 1);
  d.child(slider);  
}

function draw() {  
  clear();
  active = color('hsb(160, 100%, 50%)');
  white = color(255,255,255);
  black = color(0,0,0)
  
  for (let i = 0; i < noFloors; i++) {
    if (i < slider.value()) {
      fill(active)
    } else {
      fill(white)
    }
    rect(0, i * (fh + fp) + fp, fw, fh, 5) 
    
  }
  
  fill(black)
  text('no floors: ' + str(slider.value()), 300, 30)

}