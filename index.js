

const clock = ()=>{
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let day = d.toLocaleString('en-us', {weekday:'long'}).toUpperCase().slice(0,2);
    let month = d.getMonth() + 1;
    if (h.toString().length == 1){
        h = '0' + h.toString();
    }

    if (m.toString().length == 1){
        m = '0' + m.toString();
    }

    if (s.toString().length == 1){
        s = '0' + s.toString();
    }
    document.querySelector('.day').innerText= day;
    document.querySelector('.month').innerText= month;
    document.querySelector('.hour').innerText= h + " " + ":";
    document.querySelector('.minute').innerText= "" + m ;
    document.querySelector('.second').innerText= s;
}

setInterval(clock, 1000);