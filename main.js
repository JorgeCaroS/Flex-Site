
console.log('Funciona');
function initMap() {
    const loc = {lat: 3.402092, lng:-76.544604};
    const map = new google.maps.Map(document.querySelector('.map'), {
      center: loc,
      zoom: 12
    });

    const marker = new google.maps.Marker({position:loc, map:map});
}


/* Sticky Menu */
window.addEventListener('scroll', function(){
    if(window.scrollY>150){
        document.querySelector('#navbar').style.opacity = 0.9;
    } else{
        document.querySelector('#navbar').style.opacity = 1;
    }
    
});

/* Smooth Scroll*/

$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash= this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
        }, 800);
    }
});