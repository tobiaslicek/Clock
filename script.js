
function show_clock(){
    let h = document.getElementsByClassName('hr')[0];
    let m = document.getElementsByClassName('mn')[0];
    let s = document.getElementsByClassName('ss')[0]; 

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${hours}deg)`;
    m.style.transform = `rotate(${minutes}deg)`;
    s.style.transform = `rotate(${seconds}deg)`;
}

setInterval(show_clock, 1000);