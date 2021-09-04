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

document.getElementById('menu').addEventListener('click', () => {
    if (document.getElementById('pop-out').style.display == "none")
    {
        document.getElementById('pop-out').style.display = "block";
    }
    else {
        document.getElementById('pop-out').style.display = "none";
    }
});

picker = document.getElementById("picker");
hex = document.getElementById("hex");

hex.addEventListener("change", () => {
    picker.value = hex.value;
});

picker.addEventListener("change", () => {
    hex.value = picker.value;
});