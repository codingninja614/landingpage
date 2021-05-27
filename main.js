(() => {

    const hours = Selector(".hours");
    const minutes = Selector('.minutes');
    const seconds = Selector('.seconds');

    const checkbox = document.getElementById('switch');
    const img = document.getElementById("shops");

    // setInterval method
    setInterval(() => {
        const time = new Date();
        hours.textContent = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        minutes.textContent = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        seconds.textContent = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    }, 1000);

    // checkbox lights
    checkbox.onchange = (event) => {
        if (event.target.checked) {
            img.src = "Night_5.png";
        } else {
            img.src = "Night_4.png";
        }
    }

})();

function Selector(element) {
    return document.querySelector(element);
}
var mySong = document.getElementById("mySong"); 
var icon = document.getElementById("icon"); 
    icon.onclick = function(){
        if (mySong.paused){
            mySong.play();
        }
        else{
            mySong.pause();
        }
        }
