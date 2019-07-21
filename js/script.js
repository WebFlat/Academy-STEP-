$(document).ready(function () {

    $('#slider').on('init reInit', function (event, slick) {
        var amount = slick.slideCount;
        $('#range').attr('max', amount);
    })

    $('.slider').on('afterChange', function (e, slick, currentSlide) {
        $('#range').val(currentSlide + 1);
    })

    $('#range').on('input change', function () {
        $('.slider1').slick('slickGoTo', this.value - 1);
    });

    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        dots: false,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: false,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });



//Slider2******************************************************
    $('.slider2').slick({
        centerMode: true,
        slidesToShow: 3,
        arrows: false,
        dots: true
    }); 


});

//MAp**********************************************************

    function initMap() {
      let geo = {
        lat: 47.091689,
        lng: 37.526907
      }

      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: geo,
      });

      let marker = new google.maps.Marker({
        position: geo,
        map: map,
        icon: './img/contact/maps-flag.png',
        title: 'Малая компьютерная академия ШАГ'
      });
  }


    var clickElem = document.getElementById('burger');
    var showIcon = document.getElementById('closeBurger');
        showIcon.style.display = 'none';
        clickElem.onclick = function() {
            var showMenu = document.getElementById('menu-link');
            showMenu.style.display= 'flex';
            clickElem.style.display = 'none';
            showIcon.style.display = 'block'
        }


    var showIcon = document.getElementById('closeBurger');
        showIcon.onclick = function() {
            var clickElem = document.getElementById('burger');
            var showMenu = document.getElementById('menu-link');
            showMenu.style.display= 'none';
            clickElem.style.display = 'block';
            showIcon.style.display = 'none'
        }




