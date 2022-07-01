var topSCORES = [100,90,80,70,60,50,40,30,20,10];
var topNAMES = ["vt", "vt","vt","vt","vt","vt","vt","vt","vt","vt",];
var topALL = [topSCORES, topNAMES];

topSCORES = localStorage.getItem(topSCORES);
topNAMES = localStorage.getItem(topNAMES);

ul = document.createElement('ul');

document.getElementById('scoreHIGH').append(ul);

topALL.forEach(score => {
    let li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML += score;
})