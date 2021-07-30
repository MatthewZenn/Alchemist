var maximize = document.getElementById("maximize")
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

maximize.addEventListener("click", Maximize)

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
        document.getElementById("circle").innerHTML = "&triangle;"
    }
    else {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
        document.getElementById("circle").innerHTML = "&triangledown;"
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth == screen.width) {
        document.getElementById("circle").innerHTML = "&triangledown;"
    }
    else {
        document.getElementById("circle").innerHTML = "&triangle;"
    }
});

document.getElementById('menu').addEventListener('click', () => {
    if (document.getElementById('pop-out').style.display == "none")
    {
        document.getElementById('pop-out').style.display = "block";
    }
    else {
        document.getElementById('pop-out').style.display = "none";
    }
});