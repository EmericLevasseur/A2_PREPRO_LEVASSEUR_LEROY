var nrImg = 3; // Nombre d'image qu'on veut mettre
var nrShown  = 1;  //première image
var intSec = 3; //interval entre les images
var AutoPlay = true; //si on veut changer automatiquement

function AddCircles(){

  var parent = document.getElementById('sl-circles')

  for (i=1;i<nrImg + 1;i++){
    var li = document.createElement("li");
    li.id ="sl-circles" + i;
    parent.appendChild(li);
  }
  var p = document.getElementById('sl-circles' + nrShown);
  var a = document.createElement('a');
  a.id = "sl-curent-circle";
  p.appendChild(a);
}
function load(){

  AddCircles();
  Change();
  if(AutoPlay){
    int =setInterval(Timer, intSec * 1000);
  }
}
function Change(){
  var path = "../img/" + nrShown + ".jpg";  //charge l'image
  document.getElementById('img-show').setAttribute('src',path);

  document.getElementById('sl-curent-circle').remove();
  var parent = document.getElementById('sl-circles' + nrShown);
  var a = document.createElement('a');
  a.id = "sl-curent-circle";
  parent.appendChild(a);
}

function next(){
  if (nrShown >= nrImg){
    nrShown = 1;
  }else {
    nrShown++;
  }
  Change();

  clearInterval(int);
  int = setInterval(Timer, intSec * 1000);
}

function prev(){
  if (nrShown <= nrImg){
    nrShown = nrImg;
  }else {
    nrShown--;
  }
  Change();
  clearInterval(int);
  int = setInterval(Timer, intSec * 1000);
}

function Timer(){
  next();
}
