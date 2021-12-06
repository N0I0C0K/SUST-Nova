window.onscroll = () => {
    var temp = document.documentElement;
    console.log(temp.scrollTop);
    document.getElementById("page-2").style.opacity = (document.documentElement.scrollTop - 100) / 200;
}

window.onload = () => {
    console.log("loaded");
    console.log(document.getElementById("main").style);
}