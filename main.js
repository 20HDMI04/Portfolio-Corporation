let x = window.matchMedia("(max-width: 971px)")       
function scrolling() {
    setInterval(fussamale, 100);
    function fussamale(){
        if (x.matches) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant',
              });
        }
    }
}
