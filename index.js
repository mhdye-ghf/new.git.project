var images = [];

images[0] = "Assets/v1_12.png"
images[1] = "Assets/IMG_20230513_200148_338.jpg"
images[2] = "Assets/IMG_20230513_200149_568.jpg"

var index = 0;

function change() {
    setInterval(() => {
        document.getElementById("image1").src = images[index]
        if(index === 2){
            index = 0;
        }else{
            index++ ;
        }
    }, 6000);
}

window.onload = () => {
    setTimeout(change() , 1000)
}

function show() {
    document.getElementById('burger1').style.visibility = "visible";
}
function hide() {
    document.getElementById('burger1').style.visibility = "hidden";
}
