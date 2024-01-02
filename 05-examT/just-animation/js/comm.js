// 준비이벤트 (html 페이지를 로드한 후 실행해라)
// $(document).ready(function() {})
$(function() {

    // modal
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
    $(".modal .btn-close").on("click", function() {
        $('#modal').hide();
        // #modal(.dimmed), .modal 둘 중 아무거나 넣어도 되지만, 이왕이면 좀더 큰 #modal에 넣어주자
        
    })
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
// 기본셋팅
// $#tabs .sec-g 에 있는 .active를 찾아서 삭제해라
$('#tabs .sec-g').removeClass('active');
$('#tabs .sec-g:first-child').addClass('active');

// .sec-tit 클릭했을때
$('#tabs .sec-tit').on('click', function () {
    // 기존에 있던 .active 삭제
    $('#tabs .sec-g').removeClass('active');
    // this(그 아이)의 부모에게 .active 추가
    $(this).parent().addClass('active');
});
// ★★★ $(this)
// 방금 active한것을 선택하려면 $(this)
// 나 자신. 방금 클릭한 걔
// 이 this는 문자가 아닌 코드니까 따옴표 넣지않음