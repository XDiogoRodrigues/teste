$('.search-items').click(function(){
    $('.form-search-mobile').css({'display': 'block', 'marginTop': '10px', 'marginBottom': '10px', 'width': '95%'})
    $('.container-mobile').css('display', 'none')
    $('#container-search-desktop').removeClass('container-search-word')
    $('.container-search-mobile').css({'display': 'flex', 'justify-content': 'center', 'align-items': 'center', 'gap': '10px'})
})

$('.btn-close-mobile').click(function(){
    $('.form-search-mobile').css('display', 'none')
    $('.container-mobile').css('display', 'block')
})


$('#search').on({
    keyup: function(){
        let wordSearch = $(this).val()
        let quantityWordSeach = wordSearch.length
            
        if(quantityWordSeach > 0){
            $('.container-search-word').css('display', 'flex')
            $('.container-search-word').css('flex-direction', 'column')     
            $('.container-search-word').css('gap', '30px')     
        }else{
            $('.container-search-word').css('display', 'none')
        }         
        },
        click: function(){
            $('.container-search-word').css('display', 'none')
        }
        
})


$('#search-mobile').on({
    keyup: function(){
        let wordSearch = $(this).val()
        let quantityWordSeach = wordSearch.length
            
        if(quantityWordSeach > 0){
            $('.container-search-word').css('display', 'flex')
            $('.container-search-word').css('flex-direction', 'column')     
            $('.container-search-word').css('gap', '30px')     
        }else{
            $('.container-search-word').css('display', 'none')
        }         
        },
        click: function(){
            $('.container-search-word').css('display', 'none')
        }
        
})

$(window).resize(function (){
    let sizeWindow = window.innerWidth;

    if(sizeWindow > 1150){
        $('#container-search-desktop').addClass('container-search-word')
        $('.container-mobile').css('display', 'none')
        $('.form-search-mobile').css('display', 'none')
        $('.container-search-word').css('display', 'none')
        $('.container-mobile').css('display', 'none')
    }else{
        $('.container-mobile').css('display', 'block')

    }
})

$(window).resize(function() {
    let sizeWindow = window.innerWidth
    console.log(sizeWindow)

    if(sizeWindow <= 800){
        $('.img-service').attr('src', '/static/images/image-register.webp')
    }else{
        $('.img-service').attr('src', '/static/images/image-login.webp')
    }
})

$(window).resize(function (){
    let sizeWindow = window.innerWidth;

    if(sizeWindow >= 1150){
        $('#container-search-desktop').addClass('container-search-word')
        $('.container-mobile').css('display', 'none')
        $('.form-search-mobile').css('display', 'none')
        $('.container-search-word').css('display', 'none')
        $('.container-mobile').css('display', 'none')
        $('.container-course').addClass('gap-4')
        $('.container-course-description-actions').addClass('gap-3')
        $('.container-course-description-actions').addClass('me-5')
        $('.ancora-course').addClass('gap-3')
    }else{
        $('.container-mobile').css('display', 'block')
        $('.container-course').removeClass('gap-4')
        $('.container-course-description-actions').removeClass('gap-3')
        $('.container-course-description-actions').removeClass('me-5')
        $('.ancora-course').removeClass('gap-3')

    }
})

// NAVEGATION CONTAINER MOBILE
$('.list-items').click(function (){
    if($(this).hasClass('bi bi-list')){
        $('.container-menu-mobile').css('display', 'block')
        $('.container-menu-mobile').css('transform', 'translateX(0%)')
        $(this).removeClass('bi bi-list')
        $(this).addClass('bi bi-x-circle-fill')

    }else{
        $('.container-menu-mobile').css('transform', 'translateX(-100%)')
        $(this).removeClass('bi bi-x-circle-fill')
        $(this).addClass('bi bi-list')

    }
   
})

let sizeWindowCart = window.innerWidth;

if (sizeWindowCart <= 1150){
    $('.container-course').removeClass('gap-4')
    $('.container-course-description-actions').removeClass('gap-3')
    $('.container-course-description-actions').removeClass('me-5')
    $('.ancora-course').removeClass('gap-3')
    $('.container-payment-value').removeClass('ms-5')
}else{
    $('.container-course').addClass('gap-4')
    $('.container-course-description-actions').addClass('gap-3')
    $('.container-course-description-actions').addClass('me-5')
    $('.ancora-course').addClass('gap-3')
    $('.container-payment-value').addClass('ms-5')
}

// SECTION PAYMENT

$('input[type="radio"]').on('change', function (){
    let id = $(this).attr('id')
    console.log(id)
    if( id === 'card'){
        $('.container-data-payment-form-pix').css('display', 'none')
        $('.container-data-payment-form-card').css('display', 'block')
        $('.container-data-payment-form-card-google').css('display', 'none')
        $('.container-data-payment-form-card-boleto').css('display', 'none')
        $('.container-data-payment-form-card-mercado').css('display', 'none')


    }else if( id === 'pix'){
        $('.container-data-payment-form-pix').css('display', 'block')
        $('.container-data-payment-form-card').css('display', 'none')
        $('.container-data-payment-form-card-google').css('display', 'none')
        $('.container-data-payment-form-card-boleto').css('display', 'none')
        $('.container-data-payment-form-card-mercado').css('display', 'none')

    }else if(id === 'card-google'){
        console.log('3')
        $('.container-data-payment-form-card-google').css('display', 'block')
        $('.container-data-payment-form-pix').css('display', 'none')
        $('.container-data-payment-form-card').css('display', 'none')
        $('.container-data-payment-form-card-boleto').css('display', 'none')
        $('.container-data-payment-form-card-mercado').css('display', 'none')
        
    }else if(id === 'boleto'){
        console.log('4')
        $('.container-data-payment-form-boleto').css('display', 'block')
        $('.container-data-payment-form-card-google').css('display', 'block')
        $('.container-data-payment-form-pix').css('display', 'none')
        $('.container-data-payment-form-card').css('display', 'none')
        $('.container-data-payment-form-card-mercado').css('display', 'none')

    }
})


// SECTION ENSINE NA UDEMY

$('.action-step-grid').click(function(){
    let widthGrid = $(this).width()
    $('.linha-grid').width(widthGrid).css({'border-bottom':'2px solid gray', 'padding-bottom': '3px'})
    $('.linha-video').width(0).css('border-bottom', '0px solid gray')
    $('.linha-course').width(0).css('border-bottom', '0px solid gray')
    $(this).addClass('fw-bold')
    $('.container-step-grid').css('display', 'flex')
    $('.action-step-course').removeClass('fw-bold')
    $('.action-step-video').removeClass('fw-bold')
    $('.container-step-video').css('display', 'none')
    $('.container-step-course').css('display', 'none')

})

$('.action-step-video').click(function(){
    let widthGrid = $(this).width()
    $('.linha-video').width(widthGrid).css({'border-bottom':'2px solid gray', 'padding-bottom': '3px'})
    $('.linha-grid').width(0).css('border-bottom', '0px solid gray')
    $('.linha-course').width(0).css('border-bottom', '0px solid gray')
    $(this).addClass('fw-bold')
    $('.container-step-video').css('display', 'flex')
    $('.action-step-grid').removeClass('fw-bold')
    $('.container-step-grid').css('display', 'none')
    $('.container-step-grid').removeClass('d-flex')
    $('.container-step-course').css('display', 'none')
    $('.action-step-course').removeClass('fw-bold')
})

$('.action-step-course').click(function(){
    let widthGrid = $(this).width()
    $('.linha-course').width(widthGrid).css({'border-bottom':'2px solid gray', 'padding-bottom': '3px'})
    $('.linha-video').width(0).css('border-bottom', '0px solid gray')
    $('.linha-grid').width(0).css('border-bottom', '0px solid gray')
    $('.container-step-course').css('display', 'flex')
    $(this).addClass('fw-bold')
    $('.action-step-grid').removeClass('fw-bold')
    $('.action-step-video').removeClass('fw-bold')
    $('.container-step-grid').css('display', 'none')
    $('.container-step-video').css('display', 'none')
})


// SECTION ENSINE NA UDEMY MOBILE

$('.action-step-grid-mobile').click(function(){
    $(this).css('text-align', 'center')
    $('.action-step-video-mobile').css('text-align', 'start')
    $('.action-step-course-mobile').css('text-align', 'start')
    $('.container-step-grid-mobile').css('display', 'block')
    $('.container-step-video-mobile').css('display', 'none')
    $('.container-step-course-mobile').css('display', 'none')
})

$('.action-step-video-mobile').click(function(){
    $(this).css('text-align', 'center')
    $('.action-step-grid-mobile').css('text-align', 'start')
    $('.action-step-course-mobile').css('text-align', 'start')
    $('.container-step-video-mobile').css('display', 'block')
    $('.container-step-grid-mobile').css('display', 'none')
    $('.container-step-course-mobile').css('display', 'none')
})

$('.action-step-course-mobile').click(function(){
    $(this).css('text-align', 'center')
    $('.action-step-video-mobile').css('text-align', 'start')
    $('.action-step-grid-mobile').css('text-align', 'start')
    $('.container-step-course-mobile').css('display', 'block')
    $('.container-step-grid-mobile').css('display', 'none')
    $('.container-step-video-mobile').css('display', 'none')
})

new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

// Responsive breakpoints
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    768: {
        slidesPerView: 1
    },
    1024: {
        slidesPerView: 1
    }
  }
});