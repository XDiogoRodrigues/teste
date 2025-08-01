$(document).ready(function () {
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
