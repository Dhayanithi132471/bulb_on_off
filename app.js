//https://cdn.pixabay.com/photo/2017/07/26/16/10/light-bulb-2542155_640.png
//https://cdn.pixabay.com/photo/2018/10/30/14/45/hands-3783851_640.png

const on_btn = document.getElementById('on');
const off_btn = document.getElementById('off');
var img = document.getElementById("bulb");

function bulb_on()
{
    img.src = "https://cdn.pixabay.com/photo/2018/10/30/14/45/hands-3783851_640.png"
}

function bulb_off()
{
    img.src = "https://cdn.pixabay.com/photo/2017/07/26/16/10/light-bulb-2542155_640.png"
}