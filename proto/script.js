var au = document.getElementById("s1");
var imge = document.getElementById("imgg1");
var playpause = document.getElementById("playb");
var details = document.getElementById("info");
var sbar = document.getElementById("bar");
var sbtn1 = document.getElementById("a");
var sbtn1 = document.getElementById("b");
var sbtn1 = document.getElementById("c");
var sbtn1 = document.getElementById("d");
var menuu = document.getElementById("cnt2");

var x = 1;
var nex = 2;
var menucnt = 1;

var im1 = "images/untilifound.jpeg";
var im2 = "images/mounteverest.jpg";
var im3 = "images/stilldont.jpg";
var im4 = "images/theweeknd.jpg";

var so1 = "songs/until.mp3";
var so2 = "songs/mount.mp3";
var so3 = "songs/still.mp3";
var so4 = "songs/BlindingLights.mp3";

var name1 = "Until I found you";
var name2 = "Mount Everest";
var name3 = "Still don't know my name";
var name4 = "Blinding Lights";

function p(){
    if(x==1){
        au.play();
        x=2;
        playpause.src = "icons/pause.png";
    }
    else{
        au.pause();
        x=1;
        playpause.src = "icons/play-button.png";
    }
}

function nextt(){
    if(nex==1){
        au.src = so1;
        imge.src = im1;
        details.innerHTML = name1;
        document.body.style.backgroundImage = "url('images/untilifound.jpeg')";
        nex = 2;
    }else if(nex==2){
        au.src = so2;
        imge.src = im2;
        details.innerHTML = name2;
        document.body.style.backgroundImage = "url('images/mounteverest.jpg')";
        nex = 3;
    }else if(nex==3){
        au.src = so3;
        imge.src = im3;
        details.innerHTML = name3;
        document.body.style.backgroundImage = "url('images/stilldont.jpg')";
        nex = 4;
    }else{
        au.src = so4;
        imge.src = im4;
        details.innerHTML = name4;
        document.body.style.backgroundImage = "url('images/theweeknd.jpg')";
        nex = 1;
    }
}

function backk(){
    if(nex==1){
        au.src = so4;
        imge.src = im4;
        details.innerHTML = name4;
        document.body.style.backgroundImage = "url('images/theweeknd.jpg')";
        nex = 2;
    }else if(nex==2){
        au.src = so3;
        imge.src = im3;
        details.innerHTML = name3;
        document.body.style.backgroundImage = "url('images/stilldont.jpg')";
        nex = 3;
    }else if(nex==3){
        au.src = so2;
        imge.src = im2;
        details.innerHTML = name2;
        document.body.style.backgroundImage = "url('images/mounteverest.jpg')";
        nex = 4;
    }else{
        au.src = so1;
        imge.src = im1;
        details.innerHTML = name1;
        document.body.style.backgroundImage = "url('images/untilifound.jpeg')";
        nex = 1;
    }
}
function until(){
    au.src = so1;
    imge.src = im1;
    details.innerHTML = name1;
    document.body.style.backgroundImage = "url('images/untilifound.jpeg')";
}
function mount(){
    au.src = so2;
    imge.src = im2;
    details.innerHTML = name2;
    document.body.style.backgroundImage = "url('images/mounteverest.jpg')";
}
function still(){
    au.src = so3;
    imge.src = im3;
    details.innerHTML = name3;
    document.body.style.backgroundImage = "url('images/stilldont.jpg')";
}
function blinding(){
    au.src = so4;
    imge.src = im4;
    details.innerHTML = name4;
    document.body.style.backgroundImage = "url('images/theweeknd.jpg')";
}

function menubtn(){
    if(menucnt==1){
        menuu.style.display = "block";
        menucnt=2;
    }else{
        menuu.style.display = "none";
        menucnt=1;
    }
}