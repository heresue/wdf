$(function(){

    let duration = 300;

    // 1~4번째 버튼을 선택
    $('#buttons1 button:nth-child(-n+4)')
    .mouseenter(function(){
        $(this).stop(true).animate({
            'background-color' : 'purple',
            'color' : '#fff'
        },duration)
    })
    .mouseleave(function(){
        $(this).stop(true).animate({
            'background-color' : '#fff',
            'color' : '#ebc000'
        },duration)
    })

    // 5~8번째 버튼에 마우스 오버했을 때
    $('#buttons1 button:nth-child(n+5):nth-child(-n+8)')
    .mouseenter(function(){
        $(this).stop().animate({
            'border-width' : '10px',
            'color' : 'purple'
        },duration, 'easeOutCirc')
    })
    .mouseleave(function(){
        $(this).stop().animate({
            'border-width' : '0',
            'color' : '#ebc000'
        },duration, 'easeOutCirc')
    })

    // 9 ~ 12번째 버튼에 마우스 오버시
    $('#buttons1 button:nth-child(n+9)')
    .mouseenter(function(){
        $(this).find('span').stop().animate({
            'width' : '100%'
        }, duration, 'easeInExpo')
    })
    .mouseleave(function(){
        $(this).find('span').stop().animate({
            'width' : '0'
        }, duration, 'easeInExpo')
    })



})