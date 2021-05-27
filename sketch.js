let slider;
let noFloors = 30;
let ch = 600
let fp = 4
let fh = 25
let fw = 200
function setup() {
  createCanvas(600, 600);
  let d = createDiv();
  d.style('transform: rotate(90deg);');
  d.position(200, 200);
  slider = createSlider(0, noFloors, noFloors, 5);
  d.child(slider);  
}

function draw() {  
  active = color('hsb(160, 100%, 50%)');
  white = color(255,255,255);
  alert(slider.value)
  
  for (let i = 0; i < noFloors; i++) {
    if (i < slider.value) {
      fill(active)
    } else {
      fill(white)
    }
    rect(0, i * (fh + fp) + fp, fw, fh, 5) 
    
  }

}