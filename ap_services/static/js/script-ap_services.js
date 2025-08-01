$('.search-items').click(function(){
    $('.form-search-mobile').css({'display': 'block', 'marginTop': '10px', 'marginBottom': '10px', 'width': '95%'})
    $('.container-mobile').css('display', 'none')
    $('#container-search-desktop').removeClass('container-search-word')
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
