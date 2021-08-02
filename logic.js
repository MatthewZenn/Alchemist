var maximize = document.getElementById("maximize");
const { ipcRenderer } = require('electron');
var minimize = document.getElementById("minimize");

maximize.addEventListener("click", Maximize);
minimize.addEventListener("click", Minimize);

var myRuler = new ruler({
    container: document.querySelector('#rulers'),
    rulerHeight: 15,
    fontFamily: 'arial',
    fontSize: '7px', 
    strokeStyle: 'grey',
    lineWidth: 1,
    enableMouseTracking: true,
    enableToolTip: true
});

var pointer = document.getElementById('pointer');
var pencil = document.getElementById('pencil');
var text = document.getElementById('text');


myRuler.api.setPos({x:100, y:100})
myRuler.api.setScale(1.5);

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
    }
    else {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
    }
}

document.getElementById('menu').addEventListener('click', () => {
    if (document.getElementById('pop-out').style.display == "none")
    {
        document.getElementById('pop-out').style.display = "block";
    }
    else {
        document.getElementById('pop-out').style.display = "none";
    }
});

function Minimize() {
    ipcRenderer.send('minimize');
}