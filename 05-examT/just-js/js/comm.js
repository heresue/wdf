// 준비이벤트 (html 페이지를 로드한 후 실행해라)
// $(document).ready(function() {})

$(function() {
    // gnb
    // 변수 선언
    const $gnb = $('#gnb');
    const $gnbDepth1 = $gnb.find('.depth1 > li');
    // *바닐라자바스크립트에서는 $ 표시 안쓰는데, J쿼리는 $ 사용한다

    $gnbDepth1.on('mouseenter', function () {
        $(this).find('depth2').slideDown(500);
        // key값이 2개 이상일 때는 {}로 묶어서 처리
        // {key1: value1, key2: value2}
        $(this).children('a').css({
            'background-color': '#333',
            color: '#fff',
        });
        // key값 1개만 적용하는 경우
        // key, value
        // $(this).childred('a').css('background-color', '#333');
    });

    $gnbDepth1.on('mouseleave', function () {
        $(this).find('depth2').slideDown(500);
        $(this).children('a').css({
            'background-color': '#fff',
            color: '#333',
            // background-color: css표기법(-)이라 문자화했기 때문에 따옴표 써줘야함
            // 카멜표기법으로 쓰면 따옴표 안써도 된다 (backgroundColor)
        });
    // ★마우스오버는 css로 작업하는게 훨씬 낫다. css로 할 수 있는 부분은 css로 하고, 안되는 것들만 js로 적용하자 (훨씬 빠르기 때문에)
    });



    // modal
    const $modal = $('#modal');
    // 모달창 열기
    //  스크립트(동적처리) 이기 때문에, li를 클릭하든 a를 클릭하든 상관없다.
    // .list-bbs li:first-child 를 클릭했을 때
    // $(".list-bbs li:first-child").on("1 event", 2 function)
    $(".list-bbs li:first-child").on("click", function() {
        // modal 열기
        // .dimmed 보이게
        $('.dimmed').show();
    })
    // .modal .btn-close 클릭했을 때
    // modal 닫기
    // .dimmed 감추기
    // $(".modal .btn-close") 변수처리 -> $modal.find('.btn-close') (선택사항)
    $modal.find('.btn-close').on("click", function() {
        $('#modal').hide();
        // #modal(.dimmed), .modal 둘 중 아무거나 넣어도 되지만, 이왕이면 좀더 큰 #modal에 넣어주자
        
    })

    // [!오류] Uncaught ReferenceError: $ is not defined
    //      >>>> jQuery가 셋팅이 안되어있어서 뜨는 오류
    //  [해결] html에 jquery 넣어줌
    //      **제일 위쪽에 넣어줘야함(defer): <script defer src="./js/comm.js"></script>

    // const titTab = document.querySelectorAll('.sec-tit');
    // titTab.addEventListner('click', function () {
    //     console.log('tab click');
    //     titTab.classList.add('active');
    // })


    // tabs
    // 변수선언
    const $tabs = $('#tabs');
    // 기본셋팅
    // $#tabs .sec-g 에 있는 .active를 찾아서 삭제해라
    // $('#tabs .sec-g').removeClass('active');
    // $('#tabs .sec-g:first-child').addClass('active');
    $tabs.find('.sec-g').removeClass('active');
    $tabs.find('.sec-g:first-child').addClass('active');

    // .sec-tit 클릭했을때
    $tabs.find('.sec-tit').on('click', function () {
        // 기존에 있던 .active 삭제
        $tabs.find('.sec-g').removeClass('active');
        // this(그 아이)의 부모에게 .active 추가
        $(this).parent().addClass('active');
    // ★★★ $(this)
    // 방금 active한것을 선택하려면 $(this)
    // 나 자신. 방금 클릭한 걔
    // 이 this는 문자가 아닌 코드니까 따옴표 넣지않음
    });


    // slide
    let now = 0;
    const $slide = $('.list-slide');
    const slideCount = $('.list-slide li').length;
    // length 얻어내는 거라서 $표시 안 한다

    // 3초마다 슬라이드가 이동
    //  : left 값이 이동하면 됨
    //  : .slide .list-slide의 값(ul)이 이동해야 한다! (li X)
    // setInterval (함수, 시간)
    setInterval(function () {
        // now가 1씩 증가하는 연산
        // now 재할당
        // now = now + 1;
        //  but 이렇게 돌리면 영원히 돌아가는 슬라이드가 됨
        //  >>>>>> 나머지 연산자 사용하기
        now = (now + 1) % slideCount;
        // now(1) = (now(0) + 1) % 3;
        // now(2) = (now(1) + 1) % 3;
        // now(0) = (now(2) + 1) % 3;
        // ★★★★ 이렇게 슬라이드를 돌리는 경우는 나머지 연산자를 사용해줌

        // ★★★★ JS 배열 개수
        // const slideCount = $('.list-slide li').length;
        //  : 슬라이드개수(배열) 자동으로 셋팅
        // 슬라이드 개수가 나중에 추가/삭제 되어도 그때마다 값을 수정해줄 필요가 없음

        // 3초마다 진행되는 함수를 이렇게 밑으로 쭉쭉 붙여넣어준다
        updateSlidePosition();
    }, 3000);

    function updateSlidePosition() {
        // list-slide는 이 페이지에 하나뿐이라 .slide 생략
        $slide.css({
            // left값 반복 순서: 0, -100%, -200%, 0
            // left: '' 따옴표를 떼야 연산이 됨
            left: 100 * now * -1 + '%',
            // now: 0, 1, 2, 0 으로 할당 (위쪽에 적어준다)
        });
    }
})
