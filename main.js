let prevScrollPosition = window.pageYOffset;

window.onscroll = () => {

    let currentScrollPosition = window.pageYOffset;

    if(prevScrollPosition > currentScrollPosition) {
        document.getElementById('nav').style.top = '0';
    } else {
        document.getElementById('nav').style.top = '-100px';
    }

    prevScrollPosition = currentScrollPosition ;
}