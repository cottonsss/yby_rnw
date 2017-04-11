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
	$("#nav .filter > li").click(function(){
        var li_idx = $(this).index("#nav .filter > li");
        //console.log(li_idx);
        if(li_idx == 0 || li_idx == 2){
            $("#nav").toggleClass("nav_z_up");
            $(this).toggleClass("drop_index");
            $(this).find("a").toggleClass("filter_more_on");
            $(this).find(".bg_black2").toggleClass("hidden");
            $(this).find(".dropslct_wrap").slideToggle(200);
        }
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


    /* 드롭메뉴 체크박스 */
    $(".chk_list ul li a").click(function(){
        $(this).toggleClass("slct_active");
    });
});
