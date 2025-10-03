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


$('.container-off').click(function (){
    let sizeWindow = window.innerWidth;
    console.log(sizeWindow)
    $(this).css('border-bottom', 'none')
    let text = $(this).text()
   
    if(text == "Carreiras em alta " && sizeWindow <= 767){
        $('.container-carreer-profission').css({'display' : 'flex', 'border-bottom': '1px solid white', 'padding-bottom': '20px', 'padding-left': '10px'})
        $('.container-carreer-web').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-TI').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-leader').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-off').css('border-bottom','2px solid white')
        $(this).find('i').removeClass('bi-caret-down-fill')
        $(this).find('i').addClass('bi-caret-up-fill')
        $('.container-off-web').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-web').find('i').addClass('bi-caret-down-fill')
        $('.container-off-TI').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-TI').find('i').addClass('bi-caret-down-fill')
        $('.container-off-leader').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-leader').find('i').addClass('bi-caret-down-fill')
    

    } else if(text == "Desenvolvimento Web " && sizeWindow <= 767){
        $('.container-carreer-web').css({'display' : 'flex', 'border-bottom': '1px solid white', 'padding-bottom': '20px', 'padding-left': '10px'})
        $('.container-carreer-profission').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-TI').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-leader').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-off').css('border-bottom','2px solid white')
        $(this).find('i').removeClass('bi-caret-down-fill')
        $(this).find('i').addClass('bi-caret-up-fill')
        $('.container-off-profission').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-profission').find('i').addClass('bi-caret-down-fill')
        $('.container-off-TI').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-TI').find('i').addClass('bi-caret-down-fill')
        $('.container-off-leader').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-leader').find('i').addClass('bi-caret-down-fill')

    } else if(text == "Certificações de TI " && sizeWindow <= 767){
        $('.container-carreer-TI').css({'display' : 'flex', 'border-bottom': '1px solid white', 'padding-bottom': '20px', 'padding-left': '10px'})
        $('.container-carreer-web').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-profission').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-leader').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-off').css('border-bottom','2px solid white')
        $(this).find('i').removeClass('bi-caret-down-fill')
        $(this).find('i').addClass('bi-caret-up-fill')
        $('.container-off-web').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-web').find('i').addClass('bi-caret-down-fill')
        $('.container-off-profission').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-profission').find('i').addClass('bi-caret-down-fill')
        $('.container-off-leader').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-leader').find('i').addClass('bi-caret-down-fill')

    }else if(text == 'Liderança ' && sizeWindow <= 767){
        $('.container-carreer-leader').css({'display' : 'flex', 'border-bottom': '1px solid white', 'padding-bottom': '20px', 'padding-left': '10px'})
        $('.container-carreer-web').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-TI').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-carreer-profission').css({'display': 'none', 'border-bottom': 'none'})
        $('.container-off').css('border-bottom','2px solid white')
        $(this).find('i').removeClass('bi-caret-down-fill')
        $(this).find('i').addClass('bi-caret-up-fill')
        $('.container-off-web').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-web').find('i').addClass('bi-caret-down-fill')
        $('.container-off-TI').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-TI').find('i').addClass('bi-caret-down-fill')
        $('.container-off-profission').find('i').removeClass('bi-caret-up-fill')
        $('.container-off-profission').find('i').addClass('bi-caret-down-fill')
    }

})

