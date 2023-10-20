function slide1(){
    document.getElementById('id').src="smithbanner11.png";
    setTimeout("slide2()", 5500);
    document.getElementById('aId').href="https://open.spotify.com/album/4KKfJWr1DHk7eM50RzyxQF";
}

function slide2(){
    document.getElementById('id').src="smithbanner21.png";
    setTimeout("slide3()", 5500);
    document.getElementById('aId').href="https://www.youtube.com/watch?v=SE_M9noEhNE";
}

function slide3(){
    document.getElementById('id').src="smithbanner31.png";
    setTimeout("slide4()", 5500);
    document.getElementById('aId').href="https://www.youtube.com/watch?v=yxq_6prPABs";
}

function slide4(){
    document.getElementById('id').src="smithbanner41.png";
    setTimeout("slide1()", 5500);
    document.getElementById('aId').href="https://www.youtube.com/watch?v=db0t_NUq5bw";
}