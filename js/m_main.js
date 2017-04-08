$(document).ready(function(){
	/* 전체보기 버튼 click시 메뉴 슬라이드토글 */
	$(".btn_menu").click(function(){
		$(this).toggleClass("btn_menu_click");
		$("#bg_black1").fadeToggle(200);
		$(".dropmenu_container").slideToggle(200);
		$(".dropmenu_container li a").toggleClass("dropmenu_fade");
	});

	/* 배경1 click시 메뉴 슬라이드업 */
	$("#bg_black1").click(function(e){
		if(!$(".dropmenu_container").has(e.target).length){
			$(".btn_menu").removeClass("btn_menu_click");
			$("#bg_black1").fadeOut(200);
			$(".dropmenu_container").slideUp(200);
			$(".dropmenu_container li a").removeClass("dropmenu_fade");
		}
	});

	/* 필터 click시 드롭선택 슬라이드토글*/
	$("#nav .filter > li:nth-child(1) > a").click(function(){
		$(this).toggleClass("filter_more_on");
		$("#nav .filter > li:nth-child(1) .dropslct_wrap").slideToggle(200);
	});
	$("#nav .filter > li:nth-child(3) > a").click(function(){
		$(this).toggleClass("filter_more_on");
		$("#nav .filter > li:nth-child(3) .dropslct_wrap").slideToggle(200);
	});

	/* 롤링 click시 롤링메세지 열림 */
    $(".rolling_wrap").click(function(){
        $(this).toggleClass("rolling_wrap_on");
    });

    /* 청사초롱 click시 청사초롱 커짐 */
    $(".list_chung").click(function(){
        $(this).toggleClass("list_chung_on");
    });

    $(".float_wrap").click(function(){
		$(this).toggleClass("float_wrap_on");
		$(".float_bg_modal").fadeToggle(200);
	});
});
