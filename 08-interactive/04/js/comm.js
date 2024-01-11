$(function(){
    $('.page-header').each(function(){
        let $헤더 = $(this),
            $헤더복제 = $('<div class="page-header-clone"></div>'),
            헤더위치높이 = $('.page-header').offset().top + $('.page-header').outerHeight(),
            헤더진짜복제 = $헤더.contents().clone()


        // body 내 뒷쪽에 해당 태그 삽입
        $('body').append($헤더복제)
        // header > .inner 태그를 복제
        // $헤더.contents().clone()
        // .page-header-clone에 복제한 태그를 삽입
        $($헤더복제).append(헤더진짜복제)

        // 윈도우를 스크롤 할 때
        $(window).scroll(function(){
            // 윈도우의 스크롤 값
            //$(window).scrollTop()
            // console.log('윈도우의 스크롤 값 : ' + $(window).scrollTop())
            console.log(`윈도우의 스크롤 값 : ${$(window).scrollTop()}`)

            // 헤더의 위치값
            // $('.page-header').offset().top
            console.log(`헤더의 위치 값 : ${$헤더.offset().top}`)

            // 헤더의 높이값
            //$('.page-header').outerHeight()
            console.log(`헤더의 높이 값 : ${$헤더.outerHeight()}`)

            // 만약 스크롤 값이 헤더의 위치 값보다 커지면
            if($(window).scrollTop() > 헤더위치높이){
                $($헤더복제).addClass('visible')
            }else{
                $($헤더복제).removeClass('visible')
            }

        })


    })



   })