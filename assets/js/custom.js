$(document).ready(function () {
    "use strict"; // Start of use strict
    //navbar add remove calss
//    var header = $(".no-background");
//    $(window).on('scroll', function () {
//        var scroll = $(window).scrollTop();
//        if (scroll >= 1) {
//            header.removeClass('no-background').addClass("topbar-bg");
//        } else {
//            header.removeClass("topbar-bg").addClass('no-background');
//        }
//    });
    //Navbar collapse hide
    $('.navbar-collapse .navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    //Navbar slide down dropdown
    $('.nav-dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });
    $('.nav-dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
    //Background image
    $(".bg-img-hero").css('backgroundImage', function () {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });

    //SLIDER Preloader
    var slider_preloader_status = $(".slider_preloader_statusr");
    var slider_preloader = $(".slider_preloader");
    var header_slider = $(".header-slider");

    slider_preloader_status.fadeOut();
    slider_preloader.delay(350).fadeOut('slow');
    header_slider.removeClass("header-slider-preloader");

    // Slider JS
    $('#animation-slide').owlCarousel({
        autoHeight: true,
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true
    });
    $("#animation-slide").on("translate.owl.carousel", function () {
        $(this).find(".owl-item .slide-text > *").removeClass("fadeInUp animated").css("opacity", "0");
        $(this).find(".owl-item .slide-img").removeClass("fadeInRight animated").css("opacity", "0");
    });
    $("#animation-slide").on("translated.owl.carousel", function () {
        $(this).find(".owl-item.active .slide-text > *").addClass("fadeInUp animated").css("opacity", "1");
        $(this).find(".owl-item.active .slide-img").addClass("fadeInRight animated").css("opacity", "1");
    });






 $('.latest-flight').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i data-feather='chevron-left'></i>", "<i data-feather='chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });


    $('.stories-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i data-feather='chevron-left'></i>", "<i data-feather='chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    //Destinations carousel
    $('.destinations-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ["<i data-feather='chevron-left'></i>", "<i data-feather='chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

//    $('input').on('focusin', function () {
//        $(this).parent().find('.form-label').addClass('active');
//    });
//
//    $('input').on('focusout', function () {
//        if (!this.value) {
//            $(this).parent().find('.form-label').removeClass('active');
//        }
//    });

    $('.paypal-radio').on('click', function () {
        $('.paypal-radio').removeClass("active");
        $(this).addClass("active");
    });


//
//    var nowTemp = new Date();
//    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
//
//    var checkin = $('#dpd1').datepicker({
//        onRender: function (date) {
//            return date.valueOf() < now.valueOf() ? 'disabled' : '';
//        }
//    }).on('changeDate', function (ev) {
//        if (ev.date.valueOf() > checkout.date.valueOf()) {
//            var newDate = new Date(ev.date)
//            newDate.setDate(newDate.getDate() + 1);
//            checkout.setValue(newDate);
//        }
//        checkin.hide();
//        $('#dpd2')[0].focus();
//    }).data('datepicker');
//    var checkout = $('#dpd2').datepicker({
//        onRender: function (date) {
//            return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
//        }
//    }).on('changeDate', function () {
//        checkout.hide();
//    }).data('datepicker');







    //Theia Sticky Sidebar
    $('.leftSidebar, .mainContent, .rightSidebar')
            .theiaStickySidebar({
                additionalMarginTop: 10
            });



//    $('.flight-datepicker').datepicker({
//                autoclose: true
//    });


    //Select2
//    $(".select2").select2({
//        theme: "bootstrap",
//        width: '100%'
//    });

    $(".js-range-slider").ionRangeSlider({
        skin: "round",
        type: "double",
//                grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$"
    });



    //Popover
    $('[data-toggle="popover"]').popover({
        trigger: 'manual'
    })
            .on('mouseenter', function () {
                var _this = this;
                $(this).popover('show');
                $('.popover').on('mouseleave', function () {
                    $(_this).popover('hide');
                });
            }).on('mouseleave', function () {
        var _this = this;
        setTimeout(function () {
            if (!$('.popover:hover').length) {
                $(_this).popover('hide');
            }
        }, 0);
    });


    //Tooltip
    $('[data-toggle="tooltip"]').tooltip();


    //Sidebar filter
    $('.layer, .filters-close').on('click', function () {
        $('.filters-mobile').removeClass('show');
        $('.layer').removeClass('layer-is-visible');
    });
    $('.btn_filters_mobile').on('click', function () {
        $('.filters-mobile').addClass('show');
        $('.layer').addClass('layer-is-visible');
        $('.collapse.in').toggleClass('in');
    });


// toggle password visibility
    $('.password + .far').on('click', function () {
        $(this).toggleClass('fa-eye').toggleClass('fa-eye-slash'); // toggle our classes for the eye icon
        $('.password').togglePassword(); // activate the hideShowPassword plugin
    });

    //t date picker
    $('.round-datepicker').tDatePicker({
        autoClose: true,
        durationArrowTop: 200,
        formatDate: 'dd-mm-yyyy',
        dateCheckIn: '12-06-2021',
        dateCheckOut: '17-06-2021',
        iconDate: '',
    });
    $('.oneWay-datepicker').tDatePicker({
        autoClose: true,
        durationArrowTop: 200,
        formatDate: 'dd-mm-yyyy',
        dateCheckIn: '12-06-2021',
        dateCheckOut: '17-06-2021',
        iconDate: '',
    });
    $('.multicity-datepicker1').tDatePicker({
        autoClose: true,
        durationArrowTop: 200,
        formatDate: 'dd-mm-yyyy',
        dateCheckIn: '12-06-2021',
        dateCheckOut: '17-06-2021',
        iconDate: '',
    });
    $('.multicity-datepicker2').tDatePicker({
        autoClose: true,
        durationArrowTop: 200,
        formatDate: 'dd-mm-yyyy',
        dateCheckIn: '12-06-2021',
        dateCheckOut: '17-06-2021',
        iconDate: '',
    });
    $('.flight-status').tDatePicker({
        autoClose: true,
        limitNextMonth: 3,
        numCalendar: 1,
        dateRangesHover: false,
        iconDate: '<i class="far fa-calendar-alt"></i>'
    });
    //Feather icon
    feather.replace();



    for (var e = document.querySelectorAll(".disable-autohide .custom-select"), t = 0; t < e.length; t++)
        e[t].addEventListener("click", function (e) {
            e.stopPropagation();
        });

    for (var e = document.querySelectorAll(".travellers-dropdown .dropdown-menu"), t = 0; t < e.length; t++)
        e[t].addEventListener("click", function (e) {
            e.stopPropagation();
        });

    $('.btn-sm').on('click', function () {
        $('.dropdown, .dropdown-menu').removeClass('show');
    });


});



